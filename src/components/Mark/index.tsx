import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

export function Mark({
  children,
  $isnew,
}: {
  children?: string;
  $isnew?: boolean;
}) {
  return $isnew ? (
    <Container itemProp="isnew">
      Novo Marcador
      <button type="button">
        <FiPlus />
      </button>
    </Container>
  ) : (
    <Container>
      {children}
      <button type="button">
        <FiX />
      </button>
    </Container>
  );
}
