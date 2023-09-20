import { Container } from "./style";
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

interface RatingProps {
  grade: number;
}

export function Rating({ grade }: RatingProps) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<VscStarFull key={cont} />);
    } else {
      stars.push(<VscStarEmpty key={cont} />);
    }
  }

  return <Container>{stars}</Container>;
}
