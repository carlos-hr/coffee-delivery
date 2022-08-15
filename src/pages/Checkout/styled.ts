import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-weight: 700;
  width: 100%;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1278px) {
    padding: 2.5rem 10rem;
  }
`;

export const FormContainer = styled.div`
  width: 40rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OrderSummaryContainery = styled.div`
  width: 28rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EmptyCartContainer = styled.div`
  height: 20rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
  }

  button {
    padding: 1rem;
    text-align: center;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.secondary};
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.875rem;
    border: 0;
  }
`;
