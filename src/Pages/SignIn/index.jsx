import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

import { Container, Form, Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />

        <Button title="Entrar" />

        <ButtonText title="Criar conta" />
      </Form>
      <Background />
    </Container>
  )
}
