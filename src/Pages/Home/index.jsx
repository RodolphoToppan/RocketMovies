import { Header } from '../../Components/Header'

import { Button } from '../../Components/Button'

import { FiPlus } from 'react-icons/fi'

import { Container, Content, InsideHeader, Main } from './styles'
import { MoviesDescription } from '../../Components/MoviesDescription'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <InsideHeader>
          <h2>Meus filmes</h2>
          <Link to="/newmovie">
            <Button title="Adicionar filme" icon={FiPlus} />
          </Link>
        </InsideHeader>
        <Main>
          <Link to="/details">
            <MoviesDescription />
          </Link>
          <MoviesDescription />
          <MoviesDescription />
        </Main>
      </Content>
    </Container>
  )
}
