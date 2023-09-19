import { FiPlus } from "react-icons/fi";
import { Container } from "./style";

interface ButtonProps {
  title: string;
  $icon?: boolean;
}

export function Button({ title, $icon }: ButtonProps) {
  return (
    <Container>
      {$icon ? <FiPlus /> : ""}
      {title}
    </Container>
  );
}
