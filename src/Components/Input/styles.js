import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 1rem;

  > input {
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
