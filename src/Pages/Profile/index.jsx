import { useAuth } from '../../hooks/auth'
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Avatar, Container, Content, Form, Header } from './styles'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({ user })
  }

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
          <Input
            type="text"
            placeholder="Nome"
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha atual"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
      </Content>
    </Container>
  )
}
