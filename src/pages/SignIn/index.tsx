import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
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
            <Input $icon="user" type="text" placeholder="E-mail" />
            <Input $icon="password" type="password" placeholder="Senha" />
          </div>
          <Button title="Entrar" />

          <a href="/register">Criar conta</a>
        </div>
      </Section>
      <Background />
    </Container>
  );
}
