import {
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import tendencia from "../Calendar/Alt/tendencia.json";

function TendenciaModal({ open, onClose, data = tendencia.datos }) {
  const getColor = (categoriaPrecio) => {
    switch (categoriaPrecio) {
      case "Barato":
        return "green";
      case "Medio":
        return "yellow";
      case "Caro":
        return "red";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Tendencias de Precios</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              {[
                "Hora",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ].map((day, index) => (
                <TableCell key={index}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(24)].map((_, hour) => (
              <TableRow key={hour}>
                <TableCell>{`${hour}:00 - ${hour + 1}:00`}</TableCell>
                {[...Array(7)].map((_, day) => {
                  const item = data.find(
                    (i) =>
                      i.NumeroDiaSemana === (day + 2 > 7 ? day - 5 : day + 2) &&
                      i.Hora === `${hour}-${hour + 1}`
                  );
                  return (
                    <TableCell
                      key={day}
                      style={{
                        backgroundColor: getColor(item?.CategoriaPrecio),
                      }}
                    ></TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

export default TendenciaModal;
