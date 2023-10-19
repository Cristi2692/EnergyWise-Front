import { useFormik } from "formik";
import ModifyDataView from "./ModifyDataView";
import { useAuthContext } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ModifyData() {
  const { setUser, user, updateUser, deleteUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      axios
        .get("https://energywiseback.azurewebsites.net/user/token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsLoading(true);
          if (response.data.email) {
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
      updateUser(values);
    },
  });

  const handleEdit = () => {
    formik.setSubmitting(true);
  };

  const handleSave = () => {
    formik.handleSubmit();
  };

  const getInitials = () => {
    return `${formik.values.name[0]}${formik.values.surname[0]}`;
  };

  const handleDelete = () => {
    deleteUser();
  };
  return (
    <ModifyDataView
      isLoading={isLoading}
      isEditable={formik.isSubmitting}
      userData={formik.values}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleChange={formik.handleChange}
      getInitials={getInitials}
      openModal={openModal}
      handleOpenModal={() => setOpenModal(true)}
      handleCloseModal={() => setOpenModal(false)}
      handleDelete={handleDelete}
    />
  );
}
