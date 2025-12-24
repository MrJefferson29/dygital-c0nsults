import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer, SelectContainer, SelectLabel, SuccessMessage, SuccessIcon, SuccessTitle, SuccessText, SuccessButton } from "./styles";

const { Option } = Select;

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSelectChange, handleSubmit, isSubmitting, isSuccess, setIsSuccess } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left" {...({} as any)}>
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" {...({} as any)}>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" {...({} as any)}>
            {isSuccess ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Thank You!</SuccessTitle>
                <SuccessText>
                  Your form has been submitted successfully. We'll get back to you soon!
                </SuccessText>
                <div style={{ textAlign: "center" }}>
                  <SuccessButton onClick={() => setIsSuccess(false)}>
                    Submit Another Form
                  </SuccessButton>
                </div>
              </SuccessMessage>
            ) : (
              <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Col>
                <Col span={24}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col span={24}>
                  <Input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp Phone Number (e.g., +1234567890)"
                    value={values.whatsapp || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="whatsapp" />
                </Col>
                <Col span={24}>
                  <SelectContainer>
                    <SelectLabel>Interested Field</SelectLabel>
                    <Select
                      placeholder="Select interested field"
                      value={values.interestedField || undefined}
                      onChange={(value) => handleSelectChange("interestedField", value)}
                      style={{ width: "100%" }}
                      size="large"
                    >
                      <Option value="Mobile">Mobile</Option>
                      <Option value="Web">Web</Option>
                      <Option value="Machine Learning">Machine Learning</Option>
                    </Select>
                  </SelectContainer>
                  <ValidationType type="interestedField" />
                </Col>
                <Col span={24}>
                  <SelectContainer>
                    <SelectLabel>Current Literacy Level</SelectLabel>
                    <Select
                      placeholder="Select your literacy level"
                      value={values.literacy || undefined}
                      onChange={(value) => handleSelectChange("literacy", value)}
                      style={{ width: "100%" }}
                      size="large"
                    >
                      <Option value="Beginner">Beginner</Option>
                      <Option value="Intermediate">Intermediate</Option>
                      <Option value="Advanced">Advanced</Option>
                      <Option value="Pro">Pro</Option>
                    </Select>
                  </SelectContainer>
                  <ValidationType type="literacy" />
                </Col>
                <ButtonContainer>
                  <Button name="submit" onClick={() => {}}>
                    {isSubmitting ? t("Submitting...") : t("Submit")}
                  </Button>
                </ButtonContainer>
              </FormGroup>
            )}
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
