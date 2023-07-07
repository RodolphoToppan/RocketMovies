import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 3.2rem;

  width: 100%;
  height: 22.285rem;

  background: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 1.6rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.DESCRIPTION};
  }
`

export const Rate = styled.div`
  display: flex;
  gap: 0.675rem;

  margin-top: -1.5rem;

  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
  }
  svg {
    width: 1.125rem;
    height: 1.05rem;
    color: ${({ theme }) => theme.COLORS.PINK_300};

    &:hover {
      fill: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;
`
