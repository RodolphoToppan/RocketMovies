import { Container, Form, Login } from './styles'

import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Form>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </Form>
      <Login>
        <div>
          <Link to="/profile">Rodrigo Gonçalves</Link>
          <Link to="/sigin">sair</Link>
        </div>
        <Link to="/profile">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtfb0W8Xa0Y4A3eo9BDeOXD9vW14O7bwonD2s43T0w=s288-c-no"
            alt="Imagem do usuário"
          />
        </Link>
      </Login>
    </Container>
  )
}
