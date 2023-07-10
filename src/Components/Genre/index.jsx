import { FiX, FiPlus } from 'react-icons/fi'
import { Container } from './styles'

export function Genre({ value, isnew = false, ...rest }) {
  return (
    <Container isnew={isnew} {...rest}>
      <input
        type="text"
        value={value}
        placeholder="Novo marcador"
        readOnly={!isnew}
        {...rest}
      />
      <button className={isnew ? 'button-add' : 'button-delete'}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
