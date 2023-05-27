import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  color: ${({ theme }) => theme.COLORS.BUTTON_FONT};

  border-radius: 1rem;
  border: none;

  margin-top: 1.6rem;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
`
