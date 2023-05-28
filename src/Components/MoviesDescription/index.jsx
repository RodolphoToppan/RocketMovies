import { FiStar } from 'react-icons/fi'

import { Container, Rate, Tags } from './styles'
import { Tag } from '../Tag'

export function MoviesDescription() {
  return (
    <Container>
      <h1>Interestellar</h1>
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
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se ...
      </p>

      <Tags>
        <Tag title="Ficção científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </Tags>
    </Container>
  )
}
