import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Tag } from '../../Components/Tag'

import { Container, Content, Section } from './styles'
import { Genre } from '../../Components/Genre'
import { Link } from 'react-router-dom'

export function NewMovie() {
  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" className="voltar" />
        </Link>
        <h2>Novo filme</h2>

        <div className="inputs">
          <Input type="text" placeholder="Título" />
          <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)"
            min="0"
            max="5"
          />
        </div>

        <textarea name="description" id="description" placeholder="Descrição" />

        <Section>
          <h3>Marcadores</h3>
          <div className="tags">
            <Genre value="Ficção científica" />
            <Genre isNew />
          </div>
          <Button className="delete" title="Excluir filme" />
          <Button className="save" title="Salvar alterações" />
        </Section>
      </Content>
    </Container>
  )
}
