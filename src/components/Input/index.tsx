import { Container } from "./style";
import { FiMail, FiUser, FiLock } from "react-icons/fi";

interface InputProps {
  placeholder: string;
  $icon?: string;
  type: string;
}

export function Input({ placeholder, $icon, type }: InputProps) {
  let icon;

  if ($icon === "user") {
    icon = <FiUser />;
  } else if ($icon === "password") {
    icon = <FiLock />;
  } else if ($icon === "email") {
    icon = <FiMail />;
  }
  return (
    <Container>
      {icon}
      <input type={type} placeholder={placeholder} />
    </Container>
  );
}
