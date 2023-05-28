import { FiX, FiPlus } from 'react-icons/fi'
import { Container } from './styles'

export function Genre({ value, isNew, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input
        type="text"
        value={value}
        placeholder="Novo marcador"
        readOnly={!isNew}
        {...rest}
      />
      <button className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
