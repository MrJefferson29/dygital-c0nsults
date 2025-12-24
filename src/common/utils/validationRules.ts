import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.whatsapp) {
    errors.whatsapp = "WhatsApp phone number is required";
  } else if (!/^\+?[\d\s\-()]+$/.test(values.whatsapp)) {
    errors.whatsapp = "Please enter a valid phone number";
  }
  if (!values.interestedField) {
    errors.interestedField = "Please select an interested field";
  }
  if (!values.literacy) {
    errors.literacy = "Please select your current literacy level";
  }
  return errors;
}
