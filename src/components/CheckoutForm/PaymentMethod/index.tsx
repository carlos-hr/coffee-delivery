import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { cash, credit, debit } from "../../../constants/paymentMethods";
import { useOrder } from "../../../hooks/useOrder";
import {
  ButtonsContainer,
  PaymentButton,
  PaymentMethodsContainer,
  PaymentsTitle,
} from "./styled";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

const PaymentMethod = () => {
  const { paymentMethod, selectPaymentMethod } = useOrder();
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (paymentMethod) setValue("paymentMethod", paymentMethod);
  }, [paymentMethod, setValue]);

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
          type="button"
        >
          <CreditCard size={22} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(debit)}
          className={paymentMethod === debit ? "selected" : ""}
          type="button"
        >
          <Bank size={22} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(cash)}
          className={paymentMethod === cash ? "selected" : ""}
          type="button"
        >
          <Money size={22} />
          DINHEIRO
        </PaymentButton>
        <input type="hidden" {...register("paymentMethod")} />
      </ButtonsContainer>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethod;
