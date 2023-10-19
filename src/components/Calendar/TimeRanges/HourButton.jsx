import { useState } from "react";
import { SButton } from "./HourButton.styles";

export function HourButton({ children, color }) {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive((active) => !active);
  };

  return (
    <SButton isActive={isActive} onClick={onClick} color={color}>
      {children}
    </SButton>
  );
}
