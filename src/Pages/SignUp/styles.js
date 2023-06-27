import styled from 'styled-components'
import backgroundImg from '../../Assets/background.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 34.4rem;
  height: 57.2rem;

  margin: auto;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK_300};
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    margin-bottom: 4.8rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 4.8rem;
  }

  > div {
    margin-bottom: 0.8rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK_300};

    margin: 4.2rem auto 0;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
  }

  button {
    margin: auto;
  }
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
