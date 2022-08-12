import { MapPinLine } from "phosphor-react";
import {
  AddressFormContainer,
  CheckoutTitle,
  Input,
  InputContainer,
} from "./styled";

const AddressForm = () => {
  return (
    <AddressFormContainer>
      <CheckoutTitle>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </CheckoutTitle>
      <Input
        width="12.5rem"
        placeholder="CEP"
        type="number"
        inputMode="numeric"
      />
      <Input width="100%" placeholder="Rua" type="text" />
      <InputContainer>
        <Input
          width="12.5rem"
          placeholder="Número"
          type="number"
          inputMode="numeric"
        />
        <Input width="21.75rem" placeholder="Complemento" type="text" />
      </InputContainer>
      <InputContainer>
        <Input width="12.5rem" placeholder="Bairro" type="text" />
        <Input width="17.25rem" placeholder="Cidade" type="text" />
        <Input width="3.75rem" placeholder="UF" type="text" />
      </InputContainer>
    </AddressFormContainer>
  );
};

export default AddressForm;
