import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import LoginView from "./LoginView";

export default function Login() {
  const { login } = useAuthContext();
  const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  const [auth, setAuth] = useState({
    email: "",

    password: "",
  });

  const handleChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
    // Limpiar el mensaje de error
    setErrors((currentErrors) => ({ ...currentErrors, [e.target.name]: null }));
  };

  const handleSubmit = (values, actions) => {
    // setSubmitting(true);
    login(values.email, values.password);
    actions.setSubmitting(false);
    // setSubmitting(false);
  };

  return (
    <LoginView
      auth={auth}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
