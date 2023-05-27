import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_300};

  border: none;

  margin: 4.2rem auto 0;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
`
