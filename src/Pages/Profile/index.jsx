import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Avatar, Container, Content, Form, Header } from './styles'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </Header>

      <Content>
        <Avatar>
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtfb0W8Xa0Y4A3eo9BDeOXD9vW14O7bwonD2s43T0w=s360-c-no"
            alt="Imagem de perfil do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Form>
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="email" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha atual" icon={FiLock} />
          <Input type="password" placeholder="Nova senha" icon={FiLock} />

          <Button title="Salvar" />
        </Form>
      </Content>
    </Container>
  )
}
