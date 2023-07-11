import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'

import { Container, Content, Section } from './styles'
import { Genre } from '../../Components/Genre'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function NewMovie() {
  const navigate = useNavigate()
  const [movieName, setMovieName] = useState('')
  const [movieRating, setMovieRating] = useState(0)
  const [movieDescription, setMovieDescription] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTags() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleAddNewMovie() {
    await api.post('/notes', {
      title: movieName,
      rating: movieRating,
      description: movieDescription,
      tags
    })

    alert('Filme cadastrado com sucesso')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText
          icon={FiArrowLeft}
          title="Voltar"
          className="voltar"
          onClick={() => navigate(-1)}
        />
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
            {tags.map((tag, index) => (
              <Genre
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
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
            onClick={handleAddNewMovie}
          />
        </Section>
      </Content>
    </Container>
  )
}
