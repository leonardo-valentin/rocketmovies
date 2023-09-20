import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Background, Section } from "./style";
import { FiArrowLeft } from "react-icons/fi";

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

          <a href="/">
            <FiArrowLeft />
            Voltar para o login
          </a>
        </div>
      </Section>
      <Background />
    </Container>
  );
}
