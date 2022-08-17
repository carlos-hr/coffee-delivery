import { MapPinLine } from "phosphor-react";
import {
  AddressFormContainer,
  CheckoutTitle,
  Input,
  InputContainer,
  InputField,
} from "./styled";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const AddressForm = () => {
  const {
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const { postalCode, number, county, city, state, street } = errors;

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
    clearErrors("postalCode");
    if (postalCode && postalCode.length === 8) {
      await api.get(`/${postalCode}/json`).then((res) => {
        if (!res.data.erro) {
          const { bairro, localidade, logradouro, uf } = res.data;
          setAddress({
            street: logradouro,
            county: bairro,
            city: localidade,
            state: uf,
          });
          setIsValidPostalCode(true);
        }
      });
    }
  };

  function onChangeAddress(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    clearErrors(name);
  }

  useEffect(() => {
    const addressInfo = Object.entries(address);
    addressInfo.forEach((property) => {
      setValue(property[0], property[1]);
      clearErrors(property[0]);
    });
  }, [address, clearErrors, setValue]);

  return (
    <AddressFormContainer>
      <CheckoutTitle>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </CheckoutTitle>

      <InputField>
        <Input
          width="12.5rem"
          placeholder="CEP"
          type="text"
          inputMode="numeric"
          maxLength={8}
          {...register("postalCode")}
          onChange={onChangePostalCode}
          className={postalCode?.message && "invalid"}
        />
        <span>{postalCode?.message as string}</span>
      </InputField>

      <InputField>
        <Input
          width="100%"
          placeholder="Rua"
          type="text"
          {...register("street")}
          value={address.street}
          onChange={onChangeAddress}
          readOnly={isValidPostalCode}
          className={street?.message && "invalid"}
        />
        <span>{street?.message as string}</span>
      </InputField>

      <InputField>
        <InputContainer>
          <Input
            width="12.5rem"
            placeholder="Número"
            type="number"
            inputMode="numeric"
            {...register("number", { valueAsNumber: true })}
            className={number?.message && "invalid"}
          />

          <Input
            width="21.75rem"
            placeholder="Complemento"
            type="text"
            {...register("complement")}
          />
        </InputContainer>
        <span>{number?.message as string}</span>
      </InputField>

      <InputContainer>
        <InputField>
          <Input
            width="12.5rem"
            placeholder="Bairro"
            type="text"
            {...register("county")}
            value={address.county}
            onChange={onChangeAddress}
            readOnly={isValidPostalCode}
            className={county?.message && "invalid"}
          />
          <span>{county?.message as string}</span>
        </InputField>

        <InputField>
          <Input
            width="17.25rem"
            placeholder="Cidade"
            type="text"
            {...register("city")}
            value={address.city}
            onChange={onChangeAddress}
            readOnly={isValidPostalCode}
            className={city?.message && "invalid"}
          />
          <span>{city?.message as string}</span>
        </InputField>

        <InputField>
          <Input
            width="3.75rem"
            placeholder="UF"
            type="text"
            {...register("state")}
            value={address.state}
            onChange={onChangeAddress}
            readOnly={isValidPostalCode}
            className={state?.message && "invalid"}
          />
          <span>{state?.message as string}</span>
        </InputField>
      </InputContainer>
    </AddressFormContainer>
  );
};

export default AddressForm;
