import { MapPinLine } from "phosphor-react";
import {
  AddressFormContainer,
  CheckoutTitle,
  Input,
  InputContainer,
} from "./styled";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const AddressForm = () => {
  const { register, setValue, getValues } = useFormContext();
  const [isValidPostalCode, setIsValidPostalCode] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    county: "",
    city: "",
    state: "",
  });

  const onChangePostalCode = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const postalCode = e.target.value;
    setIsValidPostalCode(false);
    if (postalCode && postalCode.length === 8) {
      await api.get(`/${postalCode}/json`).then((res) => {
        const { bairro, localidade, logradouro, uf } = res.data;
        setAddress({
          street: logradouro,
          county: bairro,
          city: localidade,
          state: uf,
        });

        setIsValidPostalCode(true);
      });
    }
  };

  function onChangeAddress(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    console.log("aaa");
  }

  useEffect(() => {
    const addressInfo = Object.entries(address);
    addressInfo.forEach((property) => {
      setValue(property[0], property[1]);
    });
  }, [address, setValue]);

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
        maxLength={8}
        {...register("postalCode")}
        onChange={onChangePostalCode}
      />

      <Input
        width="100%"
        placeholder="Rua"
        type="text"
        {...register("street")}
        value={address.street}
        onChange={onChangeAddress}
        readOnly={isValidPostalCode}
      />

      <InputContainer>
        <Input
          width="12.5rem"
          placeholder="Número"
          type="number"
          inputMode="numeric"
          {...register("number", { valueAsNumber: true })}
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
          {...register("county")}
          value={address.county}
          onChange={onChangeAddress}
          readOnly={isValidPostalCode}
        />

        <Input
          width="17.25rem"
          placeholder="Cidade"
          type="text"
          {...register("city")}
          value={address.city}
          onChange={onChangeAddress}
          readOnly={isValidPostalCode}
        />

        <Input
          width="3.75rem"
          placeholder="UF"
          type="text"
          {...register("state")}
          value={address.state}
          onChange={onChangeAddress}
          readOnly={isValidPostalCode}
        />
      </InputContainer>
    </AddressFormContainer>
  );
};

export default AddressForm;
