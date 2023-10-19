import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup.string()
      .email('Correo electrónico inválido')
      .required('Campo obligatorio'),


    password: yup
      .string()
      .required('Campo obligatorio')
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{8,}$/,
        'La contraseña debe contener al menos 8 dígitos, un número y una letra mayúscula.'
      ),
  });
