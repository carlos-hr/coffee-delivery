import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import { MainContainer } from "./styled";

const CheckoutForm = () => {
  return (
    <MainContainer>
      <AddressForm />
      <PaymentMethod />
    </MainContainer>
  );
};

export default CheckoutForm;
