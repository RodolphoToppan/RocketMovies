import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem 1.6rem;

  border-radius: 0.8rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BUTTON_FONT};
  color: ${({ theme }) => theme.COLORS.TAG_COLOR};
`
