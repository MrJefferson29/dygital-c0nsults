import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 0.875rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #40a9ff;
  }

  &::placeholder {
    color: #bfbfbf;
  }
`;
