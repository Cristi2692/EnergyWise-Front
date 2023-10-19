import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
  .string()
  .required("El nombre es obligatorio"),

  surname: yup
  .string()
  .required("El apellido es obligatorio"),

  email: yup
  .string()
  .email("Correo electrónico inválido")
  .required("El correo electrónico es obligatorio"),

  password: yup
  .string()
  .required("La contraseña es obligatoria")
  .matches(
    /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    'La contraseña debe contener al menos 8 dígitos, un número y una letra mayúscula.'
  ),

  confirmPassword: yup
  .string()
  .oneOf([yup.ref('password'), null], "Las contraseñas deben coincidir"),

  acceptTerms: yup
  .boolean()
  .oneOf([true], "Debes aceptar los términos y condiciones legales."),

});