import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  display: grid;

  gap: 4rem;

  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'voltar voltar'
    'movie movie'
    'inputs inputs'
    'description description'
    'section section';

  width: 100%;
  height: 100%;

  padding: 5rem 12rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  overflow-y: auto;
  overflow-x: hidden;

  button.voltar {
    grid-area: voltar;
  }

  h2 {
    grid-area: movie;

    margin-top: -1.6rem;
  }

  div.inputs {
    display: flex;

    gap: 4rem;
    grid-area: inputs;
  }

  #description {
    grid-area: description;

    padding: 1.9rem 1.6rem;

    width: 111.3rem;
    height: 27.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 1rem;
    border: none;

    resize: none;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`

export const Section = styled.section`
  grid-area: section;

  display: grid;
  grid-template-areas:
    'markers markers'
    'tags tags'
    'delete save';

  gap: 4rem;
  width: 100%;

  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.COLORS.DESCRIPTION};

    grid-area: markers;
  }

  div.tags {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;

    width: 100%;
    height: 8.8rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;

    margin-top: -1.6rem;

    grid-area: tags;
  }

  button.delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`
