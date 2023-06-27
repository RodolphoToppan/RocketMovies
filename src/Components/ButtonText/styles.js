import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  width: fit-content;
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_300};

  border: none;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
`
