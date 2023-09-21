import { Container } from "./style";
import { Rating } from "../Rating";
import { Tag } from "../Tag";

export interface CardProps {
  data: {
    title: string;
    stars: number;
    description: string;
    tags: { id: number; name: string }[];
  };
}

export function Card({ data }: CardProps) {
  return (
    <Container>
      <h3>{data.title}</h3>

      <Rating grade={data.stars} />

      <p>{data.description}</p>
      <Tag tags={data.tags}></Tag>
    </Container>
  );
}
