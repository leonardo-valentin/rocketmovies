import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkDiv } from "../../components/LinkDiv";
import { Container, Background, Section } from "./style";

export function SignIn() {
  return (
    <Container>
      <Section>
        <div>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>
        <div>
          <h3>Faça seu Login</h3>

          <div className="inputs">
            <Input $icon="email" type="email" placeholder="E-mail" />
            <Input $icon="password" type="password" placeholder="Senha" />
          </div>
          <Button title="Entrar" />

          <LinkDiv dir="/register">Criar conta</LinkDiv>
        </div>
      </Section>
      <Background />
    </Container>
  );
}
