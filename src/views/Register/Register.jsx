import { useAuthContext } from "../../context/AuthContext";
import RegisterView from "./RegisterView";

export default function Register() {
  const { register } = useAuthContext();

  const handleSubmit = (values) => {
    register(values.name, values.surname, values.email, values.password);
  };

  return <RegisterView handleSubmit={handleSubmit} />;
}
