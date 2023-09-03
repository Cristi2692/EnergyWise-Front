import * as React from "react";
import HomeView from "./HomeView";

export default function Home() {
  const [home, setHome] = React.useState("");
  const [dispo, setDispo] = React.useState("");

  const handleHomeChange = (event) => {
    setHome(event.target.value);
  };
  const handleDispoChange = (event) => {
    setDispo(event.target.value);
  };

  return (
    <HomeView
      home={home}
      dispo={dispo}
      handleHomeChange={handleHomeChange}
      handleDispoChange={handleDispoChange}
    />
  );
}
