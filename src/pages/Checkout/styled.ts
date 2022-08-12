import styled from "styled-components";

export const CheckoutContainer = styled.main`
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
    background-color: blue;
  }
`;
