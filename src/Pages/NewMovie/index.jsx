import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'

import { Container, Content, Section } from './styles'
import { Genre } from '../../Components/Genre'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function NewMovie() {
  const [movieName, setMovieName] = useState('')
  const [movieRating, setMovieRating] = useState(0)
  const [movieDescription, setMovieDescription] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTags() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  async function addNewMovie() {
    try {
      const response = await api.post('/notes', {
        movieName,
        movieRating,
        movieDescription
      })

      console.log(response)

      // const { token, user } = response.data

      // setData({ user, token })
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar um novo filme')
      }
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" className="voltar" />
        </Link>
        <h2>Novo filme</h2>

        <div className="inputs">
          <Input
            type="text"
            placeholder="Título"
            onChange={e => setMovieName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)"
            min="0"
            max="5"
            onChange={e => setMovieRating(e.target.value)}
          />
        </div>

        <textarea
          name="description"
          id="description"
          placeholder="Descrição"
          onChange={e => setMovieDescription(e.target.value)}
        />

        <Section>
          <h3>Marcadores</h3>
          <div className="tags">
            <Genre value="Ficção científica" />
            <Genre
              isnew
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTags}
            />
          </div>
          <Button
            className="delete"
            title="Excluir filme"
            // onClick={removeNewMovie}
          />
          <Button
            className="save"
            title="Salvar alterações"
            onClick={addNewMovie}
          />
        </Section>
      </Content>
    </Container>
  )
}
