import { useNavigate } from "react-router-dom";
import { CheckoutForm, OrderSummary } from "../../components";
import { useCart } from "../../hooks/useCart";
import {
  CheckoutContainer,
  EmptyCartContainer,
  FormContainer,
  OrderSummaryContainery,
} from "./styled";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect } from "react";

const addressFormSchema = zod.object({
  postalCode: zod
    .string()
    .length(8, { message: "Preencha o CEP corretamente" }),
  // number: zod.number(),
  // complement: zod.string(),
  // county: zod.string(),
  // city: zod.string(),
  // state: zod.string(),
});

type AddressFormData = zod.infer<typeof addressFormSchema>;

const Checkout = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();

  function handleCheckoutForm(data: AddressFormData) {
    console.log(data);
  }

  const checkoutForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  });

  const { handleSubmit, formState, getFieldState } = checkoutForm;

  return (
    <>
      {cartState.cart.length > 0 ? (
        <CheckoutContainer onSubmit={handleSubmit(handleCheckoutForm)}>
          <FormProvider {...checkoutForm}>
            <FormContainer>
              Complete seu pedido
              <CheckoutForm />
            </FormContainer>

            <OrderSummaryContainery>
              Cafés selecionados
              <OrderSummary />
            </OrderSummaryContainery>
          </FormProvider>
        </CheckoutContainer>
      ) : (
        <EmptyCartContainer>
          <p>Você ainda não selecionou nenhum de nossos cafés :(</p>
          <button onClick={() => navigate("/")}>Continuar comprando</button>
        </EmptyCartContainer>
      )}
    </>
  );
};

export default Checkout;
