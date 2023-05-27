import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const InsideHeader = styled.div`
  margin: 5rem 11rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    width: 20.7rem;
    height: 4.8rem;
  }
`

export const Main = styled.main``
