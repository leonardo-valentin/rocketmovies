import { Input } from "../Input";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <div className="input">
        <Input type="text" placeholder="Pesquisar pelo título" />
      </div>
      <div>
        <div className="text">
          <h3>Leonardo Valentin</h3>
          <span>sair</span>
        </div>
        <a href="/profile">
          <img
            src="https://github.com/leonardo-valentin.png"
            alt="profile pic"
          />
        </a>
      </div>
    </Container>
  );
}
