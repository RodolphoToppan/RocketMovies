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

  grid-area: header;
  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`

export const Form = styled.form`
  width: 63rem;
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
  }
`
