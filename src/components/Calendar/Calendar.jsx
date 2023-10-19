import { useState, useEffect } from "react";
import { TimeRanges } from "./TimeRanges/TimeRanges";
import datosRecibidos from "./data.dummy.json";
import {
  SContainer,
  SDayButton,
  SDayContainer,
  SDayHeading,
  SDaysContainer,
} from "./Calendar.styles";
import { Button } from "@mui/material";
import { Formik } from "formik";

const diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function Calendar() {
  const [diaSeleccionado, setDiaSeleccionado] = useState(0); // 0 = Lunes, 1 = Martes, etc.
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // información de precios por dia y hora
    setDatos(datosRecibidos);
  }, []);

  const onSaveConfig = () => {};

  return (
    <Formik
      initialValues={{ weeklyConfig: [] }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <SContainer>
          {diasDeLaSemana.map((dia, index) => (
            <SDayContainer key={index} isVisible={diaSeleccionado === index}>
              <SDayHeading>{dia}</SDayHeading>
              <TimeRanges dia={dia} datos={datos} />
            </SDayContainer>
          ))}
          <SDaysContainer>
            {diasDeLaSemana.map((dia, index) => (
              <SDayButton
                key={index}
                onClick={() => setDiaSeleccionado(index)}
                isActive={diaSeleccionado === index}
              >
                {dia.slice(0, 3)}
              </SDayButton>
            ))}
          </SDaysContainer>
          <Button onClick={onSaveConfig}>Guardar cambios</Button>
        </SContainer>
      )}
    </Formik>
  );
}
