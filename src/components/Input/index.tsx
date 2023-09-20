import { Container } from "./style";

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return <Container placeholder={placeholder}></Container>;
}
