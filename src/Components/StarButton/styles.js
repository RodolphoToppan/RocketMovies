import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  height: fit-content;

  background: none;
  border: none;

  svg {
    width: 2rem;
    height: 2rem;

    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.COLORS.PINK_300};
    }
  }
`
