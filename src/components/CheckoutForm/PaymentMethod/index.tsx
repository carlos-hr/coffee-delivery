import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  ButtonsContainer,
  PaymentButton,
  PaymentMethodsContainer,
  PaymentsTitle,
} from "./styled";

const PaymentMethod = () => {
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
        <PaymentButton className="selected">
          <CreditCard size={22} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton>
          <Bank size={22} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton>
          <Money size={22} />
          DINHEIRO
        </PaymentButton>
      </ButtonsContainer>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethod;
