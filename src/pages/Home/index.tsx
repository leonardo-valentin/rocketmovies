import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Movies } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <Movies>
          <h2>Meus Filmes</h2>
          <div>
            <Button title="Adicionar Filme" $icon={true} />
          </div>
        </Movies>
      </section>

      <section>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  );
}
