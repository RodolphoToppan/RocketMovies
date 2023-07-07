import { api } from '../../services/api'

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'

import { Button } from '../../Components/Button'

import { FiPlus } from 'react-icons/fi'

import { Container, Content, InsideHeader, Main } from './styles'
import { MoviesDescription } from '../../Components/MoviesDescription'

export function Home() {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const movieNotes = await api.get('/notes')
      setMovies(movieNotes.data)
    }
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <InsideHeader>
          <h2>Meus filmes</h2>
          <Button
            title="Adicionar filme"
            icon={FiPlus}
            onClick={() => {
              navigate('/newmovie')
            }}
          />
        </InsideHeader>
        <Main>
          {movies.map(movie => (
            <MoviesDescription
              key={String(movie.id)}
              data={movie}
              onClick={() => {
                handleDetails(movie.id)
              }}
            />
          ))}
        </Main>
      </Content>
    </Container>
  )
}
