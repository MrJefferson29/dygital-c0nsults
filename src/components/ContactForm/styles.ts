import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const SelectContainer = styled("div")`
  width: 100%;
  padding: 10px 5px;
`;

export const SelectLabel = styled("label")`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

export const SuccessMessage = styled("div")`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  animation: slideIn 0.5s ease-out;
  margin-top: 2rem;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 414px) {
    padding: 2rem 1.5rem;
  }
`;

export const SuccessIcon = styled("div")`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const SuccessTitle = styled("h3")`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;

  @media only screen and (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

export const SuccessText = styled("p")`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.95);

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const SuccessButton = styled("button")`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  font-size: 1rem;
  font-weight: 700;
  padding: 12px 30px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
