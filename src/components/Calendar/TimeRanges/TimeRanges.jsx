import { GridContainer } from "./TimeRanges.styles";
import { HourButton } from "./HourButton";

export function TimeRanges(props) {
  const { dia, datos } = props;
  const horas = Array.from({ length: 24 }, (value, index) => index);

  // Función para obtener el color de fondo basado en la tendencia
  const obtenerColorDeFondo = (dia, hora) => {
    const precios = datos[dia.toLowerCase()]; // Obtengo los precios del día correspondiente
    if (!precios) return "#fafafa";

    const precio = precios[hora]; // Obtengo el precio de la hora
    switch (precio) {
      case 1:
        return "#00B098"; // Barato
      case 2:
        return "#FFCF60"; // Medio
      case 3:
        return "#F05A39"; // Caro
      default:
        return "#fafafa"; // Color por defecto si no hay precio
    }
  };

  return (
    <GridContainer>
      {horas.map((hora) => (
        <HourButton key={hora} color={obtenerColorDeFondo(dia, hora)}>
          {hora}h
        </HourButton>
      ))}
    </GridContainer>
  );
}
