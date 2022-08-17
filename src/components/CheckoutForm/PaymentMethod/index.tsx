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
  const { selectedPaymentMethod, selectPaymentMethod } = useOrder();
  const {
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const { paymentMethod } = errors;

  useEffect(() => {
    if (selectedPaymentMethod) {
      setValue("paymentMethod", selectedPaymentMethod);
      clearErrors("paymentMethod");
    }
  }, [clearErrors, selectedPaymentMethod, setValue]);

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
          className={selectedPaymentMethod === credit ? "selected" : ""}
          type="button"
        >
          <CreditCard size={22} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(debit)}
          className={selectedPaymentMethod === debit ? "selected" : ""}
          type="button"
        >
          <Bank size={22} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          onClick={() => selectPaymentMethod(cash)}
          className={selectedPaymentMethod === cash ? "selected" : ""}
          type="button"
        >
          <Money size={22} />
          DINHEIRO
        </PaymentButton>
        <input type="hidden" {...register("paymentMethod")} />
      </ButtonsContainer>
      <span>{paymentMethod?.message as string}</span>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethod;
