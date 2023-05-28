import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 5.6rem;

  padding: 1.6rem;
  gap: 1.6rem;

  background-color: ${({ isNew, theme }) =>
    isNew ? 'none' : theme.COLORS.BACKGROUND_700};

  border: ${({ isNew, theme }) =>
    isNew
      ? `1px dashed ${theme.COLORS.DESCRIPTION}`
      : theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;

  input {
    width: 12rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    background: none;
    border: none;
  }

  button {
    background: none;
    border: none;
  }

  svg {
    width: 2.2rem;
    height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`
