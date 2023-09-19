import { Container, Search } from "./style";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Search placeholder="Pesquisar pelo título" />
      <a href="#">
        <div>
          <h3>Leonardo Valentin</h3>
          <span>sair</span>
        </div>
        <img src="https://github.com/leonardo-valentin.png" alt="profile pic" />
      </a>
    </Container>
  );
}
