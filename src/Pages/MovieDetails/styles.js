import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-areas:
    'back back'
    'h2 star'
    'author author'
    'tags tags'
    'description description';

  align-items: baseline;

  width: 100%;
  height: 100%;

  gap: 4rem;

  padding: 4rem 12rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  overflow-y: auto;

  > button {
    grid-area: back;
  }

  h2 {
    grid-area: h2;

    margin-top: -1.6rem;

    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .rate {
    display: flex;

    grid-area: star;

    margin-top: -1.6rem;
  }

  .description {
    grid-area: description;

    text-align: justify;
  }
`

export const Author = styled.div`
  grid-area: author;

  display: flex;
  align-items: center;

  gap: 0.8rem;

  margin-top: -1.6rem;

  > img {
    width: 16px;
    height: 16px;

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 50%;
  }

  > span svg {
    width: 1.6rem;
    height: 1.6rem;

    stroke: ${({ theme }) => theme.COLORS.PINK_300};

    margin: 0 0.8rem -0.2rem 0;
  }
`
export const Tags = styled.div`
  grid-area: tags;

  display: flex;
  gap: 0.8rem;

  height: fit-content;
`
