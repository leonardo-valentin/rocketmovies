import { FiPlus } from "react-icons/fi";
import { Container } from "./style";

interface ButtonProps {
  title: string;
  $icon?: boolean;
  dark?: boolean;
}

export function Button({ title, $icon, dark }: ButtonProps) {
  return dark ? (
    <Container itemProp="dark">
      {$icon ? <FiPlus /> : ""}
      {title}
    </Container>
  ) : (
    <Container>
      {$icon ? <FiPlus /> : ""}
      {title}
    </Container>
  );
}
