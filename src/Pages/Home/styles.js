import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  overflow-x: hidden;
`
export const Content = styled.div`
  overflow-y: auto;
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
    margin: 0;
    width: 20.7rem;
    height: 4.8rem;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  margin: 0 11rem 5rem;
`
