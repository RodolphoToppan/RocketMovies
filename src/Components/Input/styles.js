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
  }

  svg {
    width: 2rem;
    height: 2rem;

    margin-right: 1.6rem;
  }
`
