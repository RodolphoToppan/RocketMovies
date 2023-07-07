import { FiStar } from 'react-icons/fi'

import { Container, Rate, Tags } from './styles'
import { Tag } from '../Tag'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function MoviesDescription({ data, ...rest }) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const movieTags = await api.get(`/notes/${data.id}`)
      setTags(movieTags.data.tags)
    }
    fetchTags()
  }, [])

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rate>
        <button>
          <FiStar />
        </button>
        <button>
          <FiStar />
        </button>
        <button>
          <FiStar />
        </button>
        <button>
          <FiStar />
        </button>
        <button>
          <FiStar />
        </button>
      </Rate>
      <p>{data.description}</p>

      <Tags>
        {tags && tags.map(tag => <Tag key={String(tag.id)} title={tag.name} />)}
      </Tags>
    </Container>
  )
}
