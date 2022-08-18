import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  background-color: ${(props) => props.theme.base_card};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  svg path,
  circle,
  line,
  rect,
  polygon {
    stroke: ${(props) => props.theme.secondary};
  }

  span {
    color: red;
    font-size: 0.75rem;
    font-family: "Roboto";
    font-weight: 600;
  }
`;

export const PaymentsTitle = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.base_text};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PaymentButton = styled.button`
  background-color: ${(props) => props.theme.base_button};
  width: 11.167rem;
  height: 3.1875rem;
  border: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  font-size: 0.75rem;
  white-space: nowrap;
  border-radius: 6px;

  &.selected {
    background-color: ${(props) => props.theme.secondary_light};
    border: 1px solid ${(props) => props.theme.secondary};
  }
`;
