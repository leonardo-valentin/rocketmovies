import { FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./style";
import { LinkDiv } from "../../components/LinkDiv";

export function Profile() {
  return (
    <Container>
      <header>
        <LinkDiv dir="/" icon="leftarrow">
          Voltar
        </LinkDiv>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/leonardo-valentin.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" $icon="user" />
        <Input placeholder="E-mail" type="text" $icon="email" />
        <Input placeholder="Senha atual" type="password" $icon="password" />
        <Input placeholder="Nova Senha" type="password" $icon="password" />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
