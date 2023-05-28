import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  padding: 6.4rem 14rem;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 50rem;
`

export const Avatar = styled.div`
  display: flex;
  position: relative;

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;

    margin-top: -15rem;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    border-radius: 50%;

    position: absolute;
    right: 1rem;
    bottom: 0.4rem;

    cursor: pointer;
  }

  svg {
    width: 2rem;
    height: 2rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  input {
    display: none;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 100%;

  margin-top: 6.4rem;

  display: grid;
  gap: 0.8rem;

  > :nth-child(2) {
    margin-bottom: 1.6rem;
  }
`
