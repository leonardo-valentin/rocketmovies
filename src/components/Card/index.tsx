import { Container } from "./style";
import { Rating } from "../Rating";

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
      <div>
        {data.tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
    </Container>
  );
}
