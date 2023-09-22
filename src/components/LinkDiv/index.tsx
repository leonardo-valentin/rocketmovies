import { Container } from "./style";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

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
      <Link to={dir}>
        {icon === "leftarrow" ? <FiArrowLeft /> : ""}
        {children}
      </Link>
    </Container>
  );
}
