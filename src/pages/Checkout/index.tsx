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
import {
  addressFormSchema,
  AddressFormData,
} from "../../utils/addressFormSchema";
import { useOrder } from "../../hooks/useOrder";

const Checkout = () => {
  const { cartState, subtotal, deliveryFee } = useCart();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();

  function handleCheckoutForm(orderDetails: AddressFormData) {
    const { cart } = cartState;
    const data = {
      orderDetails,
      subtotal,
      deliveryFee,
      cart: {
        cart,
      },
    };
    placeOrder(data);
  }

  const checkoutForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  });

  const { handleSubmit } = checkoutForm;

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
