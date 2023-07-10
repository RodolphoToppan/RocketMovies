import { useAuth } from '../../hooks/auth'

import { Container, Form, Login } from './styles'

import { ButtonText } from '../ButtonText'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const { signOut } = useAuth()
  const [search, setSearch] = useState([])
  const navigate = useNavigate()
  const { user } = useAuth()

  // useEffect(() => {
  //   async function fetchNotes() {
  //     const response = await api.get(`/notes?title=${search}`)
  //   }
  //   fetchNotes()
  //   // console.log(search)
  // }, [search])

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Form>
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
      <Login>
        <div>
          <Link onClick={() => navigate('/profile')}>{user.name}</Link>
          <ButtonText title="sair" onClick={signOut}></ButtonText>
        </div>
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtfb0W8Xa0Y4A3eo9BDeOXD9vW14O7bwonD2s43T0w=s288-c-no"
          alt={`Imagem do usuário ${user.name}`}
          onClick={() => {
            navigate('/profile')
          }}
        />
      </Login>
    </Container>
  )
}
