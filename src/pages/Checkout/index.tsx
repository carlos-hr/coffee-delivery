import { CheckoutForm, OrderSummary } from "../../components";
import {
  CheckoutContainer,
  FormContainer,
  OrderSummaryContainery,
} from "./styled";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <FormContainer>
        Complete seu pedido
        <CheckoutForm />
      </FormContainer>

      <OrderSummaryContainery>
        Cafés selecionados
        <OrderSummary />
      </OrderSummaryContainery>
    </CheckoutContainer>
  );
};

export default Checkout;
