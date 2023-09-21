import { Container } from "./style";
import { FiArrowLeft } from "react-icons/fi";

export function LinkDiv({
  dir,
  icon,
  children,
}: {
  dir: string;
  icon?: string;
  children: string;
}) {
  return (
    <Container>
      <a href={dir}>
        {icon === "leftarrow" ? <FiArrowLeft /> : ""}
        {children}
      </a>
    </Container>
  );
}
