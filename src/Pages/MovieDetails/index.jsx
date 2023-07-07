import { api } from '../../services/api'

import { useEffect, useState } from 'react'

import { FiArrowLeft, FiClock, FiStar } from 'react-icons/fi'

import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { StarButton } from '../../Components/StarButton'
import { Tag } from '../../Components/Tag'

import { useNavigate, useParams } from 'react-router-dom'

import { Author, Container, Content, Tags } from './styles'

export function MovieDetails() {
  const navigate = useNavigate()
  const params = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchMovieDetails() {
      const movies = await api.get(`/notes/${params.id}`)
      setData(movies.data)
    }

    fetchMovieDetails()
  })

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={FiArrowLeft}
          onClick={() => {
            navigate(-1)
          }}
        />
        <h2>{data.title}</h2>
        <div className="rate">
          <StarButton />
          <StarButton />
          <StarButton />
          <StarButton />
          <StarButton />
        </div>

        <Author>
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtfb0W8Xa0Y4A3eo9BDeOXD9vW14O7bwonD2s43T0w=s360-c-no"
            alt="Imagem de perfil do usuário"
          />
          <p>por Rodolpho Toppan</p>
          <span>
            <FiClock /> 23/05/22 às 08:00
          </span>
        </Author>

        <Tags>
          {data.tags &&
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
        </Tags>

        <p className="description">{data.description}</p>
      </Content>
    </Container>
  )
}
