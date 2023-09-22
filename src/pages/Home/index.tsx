import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Movies } from "./style";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />

      <section>
        <Movies>
          <h2>Meus Filmes</h2>
          <div>
            <Link to="/new">
              <Button title="Adicionar Filme" $icon={true} />
            </Link>
          </div>
        </Movies>
      </section>

      <main>
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
        <Card
          data={{
            title: "Interestellar",
            stars: 4,
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que`,
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
      </main>
    </Container>
  );
}
