import { LinkDiv } from "../../components/LinkDiv";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Background, Section } from "./style";

export function SignUp() {
  return (
    <Container>
      <Section>
        <div>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>
        <div>
          <h3>Crie sua conta</h3>

          <div className="inputs">
            <Input $icon="user" type="text" placeholder="Nome" />
            <Input $icon="email" type="email" placeholder="E-mail" />
            <Input $icon="password" type="password" placeholder="Senha" />
          </div>
          <Button title="Cadastrar" />

          <LinkDiv dir="/" icon="leftarrow">
            Voltar para o login
          </LinkDiv>
        </div>
      </Section>
      <Background />
    </Container>
  );
}
