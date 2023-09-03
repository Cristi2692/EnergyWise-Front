import * as React from "react";
import HeaderView from "./HeaderView";
import { useAuthContext } from "../../context/AuthContext";

export default function Header() {
  const { logout } = useAuthContext();
  const [menu, setMenu] = React.useState(null);

  const handleMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderView
      menu={menu}
      handleMenu={handleMenu}
      handleClose={handleClose}
      handleLogout={handleLogout}
    />
  );
}
