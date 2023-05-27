import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
