import {
  Calendar as RBCalendar,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";
import { useMemo, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { MyWeek } from "./CustomWeekView";
import { es } from "date-fns/locale";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { v4 as uuidv4 } from "uuid";

// Configuración de localización.
const locales = {
  es: es,
};

// Localizador para la biblioteca de calendario usando date-fns.
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date) => startOfWeek(date, { weekStartsOn: 1 }), //Inicio de la semana en lunes
  getDay,
  locales,
});

// Estilos del calendario
const SContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  height: 80vh;
  margin: 100px;
  background-color: #fff;
  border-radius: 10px;

  & > .rbc-calendar {
    flex: 1;
  }

  .rbc-header {
    font-size: 1.5em;
    height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #006775;
    color: white;
  }
  .rbc-time-header-gutter,
  .rbc-time-header-gutter .rbc-timeslot-group {
    background-color: #006775;
  }

  .rbc-allday-cell {
    display: none;
  }
`;

// Componente de evento en el calendario.
const CalendarEvent = ({ event, onDelete }) => (
  <div>
    {event.title} <button onClick={() => onDelete(event)}>Quitar</button>
  </div>
);

// Componente principal del calendario.
export const Calendar = ({ events: defaultEvents, onEventsChange }) => {
  const [events, setEvents] = useState(defaultEvents ?? []);

  // // Función memorizada para borrar un evento
  // Se utiliza useCallback para evitar recrear la función cada vez que se re-renderiza el componente.
  // así sólo se vuelve a crear si events o onEventsChange cambian.
  const handleDeleteEvent = useCallback(
    (eventToDelete) => {
      const eventsFiltered = events.filter(
        (event) => event.id !== eventToDelete.id
      );
      setEvents(eventsFiltered);
      onEventsChange(eventsFiltered); // Notifica los cambios a la función pasada como prop.
    },
    [events, onEventsChange]
  );

  // Objeto memoizado que contiene configuraciones y componentes del calendario.
  // useMemo retorna un valor memorizado con esto evito
  // cálculos innecesarios en cada renderizado.
  const { components, views } = useMemo(
    () => ({
      components: {
        event: (eventProps) => (
          <CalendarEvent {...eventProps} onDelete={handleDeleteEvent} />
        ),
      },
      views: {
        week: MyWeek, //Vista de una semana.
      },
    }),
    [handleDeleteEvent]
  );

  // Evita la recreación de la función a menos que onEventsChange o events cambien.
  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      setEvents((prev) => [...prev, { id: uuidv4(), start, end }]);
      onEventsChange([...events, { id: uuidv4(), start, end }]);
    },
    [onEventsChange, events]
  );

  // Primera letra mayúscula
  const capitalizeFirstLetter = useCallback(
    (str) => (str ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : ""),
    []
  );

  //Verificar si se puede seleccionar un slot.
  const handleSelecting = (range) => {
    return !events.some(
      (event) =>
        Math.max(event.start, range.start) < Math.min(event.end, range.end)
    );
  };

  // Estilos para eventos.
  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: "#2FC4D7",
    };
    return {
      style,
    };
  };

  return (
    <SContainer>
      <RBCalendar
        formats={{
          dayFormat: (date) =>
            capitalizeFirstLetter(format(date, "EEEE", { locale: es })),
          timeGutterFormat: "HH:mm",
          eventTimeRangeFormat: (range) =>
            `${format(range.start, "HH:mm")} – ${format(range.end, "HH:mm")}`,
          selectRangeFormat: (range) =>
            `${format(range.start, "HH:mm")} – ${format(range.end, "HH:mm")}`,
        }}
        localizer={localizer}
        components={components}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.WEEK}
        views={views}
        toolbar={false}
        onSelectSlot={handleSelectSlot}
        selectable
        step={60}
        timeslots={1}
        dayLayoutAlgorithm="no-overlap"
        onSelecting={handleSelecting}
        eventPropGetter={eventStyleGetter}
      />
    </SContainer>
  );
};
