import { useMemo } from "react";
import TimeGrid from "react-big-calendar/lib/TimeGrid"; // use 'react-big-calendar/lib/TimeGrid'. Can't 'alias' in Storybook

function MyWeek({
  date,
  localizer,
  max = localizer.endOf(new Date(), "day"),
  min = localizer.startOf(new Date(), "day"),
  scrollToTime = localizer.startOf(new Date(), "day"),
  ...props
}) {
  const currRange = useMemo(
    () => MyWeek.range(date, { localizer }), //Rango de fechas para la semana dada la fecha y el localizador
    [date, localizer]
  );

  return (
    <TimeGrid
      date={date}
      eventOffset={15}
      localizer={localizer}
      max={max}
      min={min}
      range={currRange}
      scrollToTime={scrollToTime}
      {...props}
    />
  );
}

MyWeek.range = (date, { localizer }) => {
  let firstOfWeek = localizer.startOfWeek();
  let start = localizer.startOf(date, "week", firstOfWeek);
  let end = localizer.endOf(date, "week", firstOfWeek);

  return localizer.range(start, end);
};

MyWeek.title = (date) => {
  return "";
};

export { MyWeek };
