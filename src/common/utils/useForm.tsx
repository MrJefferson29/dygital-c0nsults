import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    whatsapp: "",
    interestedField: "",
    literacy: "",
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openNotificationWithIcon = (type: "success" | "error", message: string, description: string) => {
    notification[type]({
      message,
      description,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Check if form is valid (all required fields filled)
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_veuypsd";
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_smcyqom";
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "xA9iEWfT9dviKx4-9";

      const templateParams = {
        to_email: "thejefferson29@gmail.com",
        from_name: values.name,
        from_email: values.email,
        whatsapp: values.whatsapp,
        interested_field: values.interestedField,
        literacy: values.literacy,
        reply_to: values.email,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setShouldSubmit(true);
        setIsSuccess(true);
        openNotificationWithIcon("success", "Success", "Your form has been submitted successfully!");
      } catch (error) {
        console.error("EmailJS error:", error);
        setIsSuccess(false);
        openNotificationWithIcon("error", "Error", "Failed to send email. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues({
        name: "",
        email: "",
        whatsapp: "",
        interestedField: "",
        literacy: "",
      });
      setShouldSubmit(false);
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
    setErrors((errors) => ({ ...errors, [name]: "" }));
  };

  return {
    handleChange,
    handleSelectChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  };
};
