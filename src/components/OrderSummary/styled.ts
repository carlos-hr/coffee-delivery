import styled from "styled-components";

export const OrderSummaryContainer = styled.main`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 44px;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 400;

  svg {
    cursor: pointer;
    line {
      stroke: ${(props) => props.theme.secondary};
    }
  }

  div + div {
    padding-top: 1.5rem;
  }
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > span {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    p {
      font-size: 1rem;
    }

    &.total {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  button {
    height: 2.875rem;
    text-align: center;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.875rem;
    border: 0;
  }
`;
