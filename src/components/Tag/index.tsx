import { Container } from "./style";

export interface TagProps {
  tags: {
    id: number;
    name: string;
  }[];
}

export function Tag({ tags }: TagProps) {
  return (
    <Container>
      {tags.map((tag) => (
        <span key={tag.id}>{tag.name}</span>
      ))}
    </Container>
  );
}
