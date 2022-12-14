import styled from "styled-components";

interface InputProps {
  width: string;
}

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.9375rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.base_card};
`;

export const CheckoutTitle = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  svg path,
  circle,
  line {
    stroke: ${(props) => props.theme.primary_dark};
  }

  p {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.base_text};
  }
`;

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme.base_button};
  background: ${(props) => props.theme.base_input};
  border-radius: 6px;
  padding: 0.75rem;

  ::placeholder {
    color: ${(props) => props.theme.base_label};
  }

  &[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  :focus {
    border: 1px solid ${(props) => props.theme.primary};
  }

  &:read-only {
    color: ${(props) => props.theme.base_label};
    background: ${(props) => props.theme.base_hover};
    cursor: not-allowed;
  }

  &.invalid {
    border-color: red;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: red;
    font-size: 0.75rem;
    font-family: "Roboto";
    font-weight: 600;
    padding-top: 0.25rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
