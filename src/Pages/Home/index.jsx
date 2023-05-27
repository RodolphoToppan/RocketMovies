import { Header } from '../../Components/Header'

import { Button } from '../../Components/Button'

import { FiPlus } from 'react-icons/fi'

import { Container, InsideHeader } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <InsideHeader>
        <h2>Meus filmes</h2>
        <Button title="Adicionar filme" icon={FiPlus} />
      </InsideHeader>
    </Container>
  )
}
