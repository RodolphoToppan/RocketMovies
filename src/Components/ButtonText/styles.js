import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.PINK_300};

  border: none;

  margin: 4.2rem auto 0;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
`
