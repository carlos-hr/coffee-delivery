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
`;

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.base_button};
  img {
    width: 4rem;
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    display: flex;
    width: 100%;
    justify-content: space-between;

    p {
      font-weight: 700;
      color: ${(props) => props.theme.base_text};
      margin-left: 0.5rem;
    }
  }
`;

export const QuantityDetails = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    height: 2rem;
    width: 4.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.base_button};
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
      border: none;
      background: ${(props) => props.theme.base_button};
      width: 1rem;
      text-align: center;
    }

    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    background-color: ${(props) => props.theme.base_button};
    height: 2rem;
    border: none;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    border-radius: 6px;
  }
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
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
