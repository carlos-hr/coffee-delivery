import { MapPinLine } from "phosphor-react";
import {
  AddressFormContainer,
  CheckoutTitle,
  Input,
  InputContainer,
} from "./styled";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { api } from "../../../services/api";

const AddressForm = () => {
  const { register, formState, setValue } = useFormContext();
  const [address, setAddress] = useState({
    street: "",
    county: "",
    city: "",
    state: "",
  });

  const onChangePostalCode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postalCode = e.target.value;

    if (postalCode && postalCode.length === 8) {
      await api.get(`/${postalCode}/json`).then((res) => {
        const { bairro, localidade, logradouro, uf } = res.data;
        setAddress({
          street: logradouro,
          county: bairro,
          city: localidade,
          state: uf,
        });
      });
    }
  };

  console.log(address);
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
        type="text"
        inputMode="numeric"
        required
        maxLength={8}
        {...register("postalCode", { pattern: /^[0-9]{5}-[0-9]{3}$/ })}
        onChange={onChangePostalCode}
      />

      <Input
        width="100%"
        placeholder="Rua"
        type="text"
        value={address.city || ""}
        {...register("street")}
      />

      <InputContainer>
        <Input
          width="12.5rem"
          placeholder="Número"
          type="number"
          inputMode="numeric"
          {...register("number")}
        />

        <Input
          width="21.75rem"
          placeholder="Complemento"
          type="text"
          {...register("complement")}
        />
      </InputContainer>

      <InputContainer>
        <Input
          width="12.5rem"
          placeholder="Bairro"
          type="text"
          value={address.county || ""}
          {...register("county")}
        />

        <Input
          width="17.25rem"
          placeholder="Cidade"
          type="text"
          value={address.city || ""}
          {...register("city")}
        />

        <Input
          width="3.75rem"
          placeholder="UF"
          type="text"
          value={address.state || ""}
          {...register("state")}
        />
      </InputContainer>
    </AddressFormContainer>
  );
};

export default AddressForm;
