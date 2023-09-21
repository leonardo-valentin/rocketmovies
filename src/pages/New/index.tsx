import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LinkDiv } from "../../components/LinkDiv";
import { Mark } from "../../components/Mark";
import {
  Container,
  LinkPosition,
  Title,
  Form,
  Markdown,
  Buttons,
} from "./style";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <LinkPosition>
          <LinkDiv dir="/" icon="leftarrow">
            Voltar
          </LinkDiv>
        </LinkPosition>

        <Title>Novo Filme</Title>

        <Form id="newnote">
          <div>
            <Input type="text" placeholder="Título" />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>

          <textarea placeholder="Observações"></textarea>
        </Form>

        <Markdown>
          <h2>Marcadores</h2>
          <div>
            <Mark>React</Mark>
            <Mark $isnew />
          </div>
        </Markdown>

        <Buttons>
          <Button dark title="Excluir Filme"></Button>
          <Button title="Salvar Alterações"></Button>
        </Buttons>
      </main>
    </Container>
  );
}
