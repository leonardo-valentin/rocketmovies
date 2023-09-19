import { Container } from "./style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Card() {
  return (
    <Container>
      <h3>Interstellar</h3>

      <div className="stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>

      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
        inteligência desconhecida que está enviando mensagens codificadas
        através de radiação gravitacional, deixando coordenadas em binário que
        os levam até uma instalação secreta da NASA liderada pelo professor John
      </p>
      <div>
        <span>Ficção Científica</span>
        <span>Drama</span>
        <span>Família</span>
      </div>
    </Container>
  );
}
