import { useFormik } from "formik";
import ModifyDataView from "./ModifyDataView";
import { useAuthContext } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ModifyData() {
  const { setUser, user, updateUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  // console.log("User from context:", user);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      axios
        .get("http://localhost:3000/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsLoading(true);
          if (response.data.id) {
            setUser(response.data);
            setIsLoading(false);
          }
        })

        .catch((err) => {
          console.error("Error en la verificación:", err.message);
          sessionStorage.removeItem("authToken");
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [setUser]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || "",
      surname: user?.surname || "",
      email: user?.email || "",
    },
    onSubmit: (values) => {
      const userId = user.id;
      updateUser(userId, values);
    },
  });

  const handleEdit = () => {
    formik.setSubmitting(true);
  };

  const handleSave = () => {
    formik.handleSubmit();
  };

  return (
    <ModifyDataView
      isLoading={isLoading}
      isEditable={formik.isSubmitting}
      userData={formik.values}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleChange={formik.handleChange}
    />
  );
}
