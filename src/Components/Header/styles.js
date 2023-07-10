import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 11.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 6.4rem;

  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_BOTTOM};

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`

export const Form = styled.form`
  width: 63rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 1rem;

  input {
    width: 100%;

    height: 5.6rem;
    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  svg {
    size: 2rem;

    margin-left: 1.6rem;
  }
`

export const Login = styled.div`
  display: flex;
  align-items: center;

  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;

    cursor: pointer;
  }
`
