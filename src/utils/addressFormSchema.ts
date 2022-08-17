import * as zod from "zod";

export const addressFormSchema = zod.object({
  postalCode: zod
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .length(8, {
      message: "Preencha o CEP corretamente",
    }),
  number: zod.number({
    required_error: "Campo obrigatório",
    invalid_type_error: "Valor inválido",
  }),
  complement: zod.string().optional(),
  county: zod
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .min(1, {
      message: "Campo obrigatório",
    }),
  city: zod
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .min(1, {
      message: "Campo obrigatório",
    }),
  state: zod
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .min(1, {
      message: "Campo obrigatório",
    }),
  street: zod
    .string({
      required_error: "Campo obrigatório",
      invalid_type_error: "Valor inválido",
    })
    .min(1, {
      message: "Campo obrigatório",
    }),
  paymentMethod: zod
    .string({
      required_error: "Selecione uma forma de pagamento",
    })
    .min(1, {
      message: "Selecione uma forma de pagamento",
    }),
});

export type AddressFormData = zod.infer<typeof addressFormSchema>;
