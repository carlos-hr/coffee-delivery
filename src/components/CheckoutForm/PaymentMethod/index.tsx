import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { cash, credit, debit } from "../../../constants/paymentMethods";
import { useOrder } from "../../../hooks/useOrder";
import {
  ButtonsContainer,
  PaymentButton,
  PaymentMethodsContainer,
  PaymentsTitle,
} from "./styled";

const PaymentMethod = () => {
  const { paymentMethod, selectPaymentMethod } = useOrder();

  return (
    <PaymentMethodsContainer>
      <PaymentsTitle>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
      </PaymentsTitle>

      <ButtonsContainer>
        <PaymentButton
          onClick={() => selectPaymentMethod(credit)}
          className={paymentMethod === credit ? "selected" : ""}
        >
          <CreditCard size={22} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(debit)}
          className={paymentMethod === debit ? "selected" : ""}
        >
          <Bank size={22} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(cash)}
          className={paymentMethod === cash ? "selected" : ""}
        >
          <Money size={22} />
          DINHEIRO
        </PaymentButton>
      </ButtonsContainer>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethod;
