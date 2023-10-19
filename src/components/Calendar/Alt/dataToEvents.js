import data from '../data.dummy.json';

const mapDataToEvents = (data) => {
  const events = [];
  const dayToNumber = {
    "lunes": 0,
    "martes": 1,
    "miércoles": 2,
    "jueves": 3,
    "viernes": 4,
    "sábado": 5,
    "domingo": 6
  };

  for (const [day, hours] of Object.entries(data)) {
    for (const [hour, value] of Object.entries(hours)) {
      const date = new Date(); // Fecha de hoy
      date.setDate(date.getDate() - date.getDay() + dayToNumber[day]); // Ajuste al día correcto de la semana
      date.setHours(Number(hour)); // Establecemos la hora
      date.setMinutes(0); 
      date.setSeconds(0); 
      date.setMilliseconds(0); 

      const endDate = new Date(date);
      endDate.setHours(endDate.getHours() + 1); // La hora de finalización es una hora después del inicio

      const colorMap = {
        1: "#00B098",
        2: "#FFCF60",
        3: "#F05A39"
      };

      events.push({
        start: date,
        end: endDate,
        title: '', // No título
        bgColor: colorMap[value]
      });
    }
  }

  return events;
};

export const events = mapDataToEvents(data);