import { api } from '../../services/api'

import { useState } from 'react'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

import { Container, Form, Background } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText
          onClick={() => {
            navigate(-1)
          }}
          title="Voltar para login"
        ></ButtonText>
      </Form>
      <Background />
    </Container>
  )
}
