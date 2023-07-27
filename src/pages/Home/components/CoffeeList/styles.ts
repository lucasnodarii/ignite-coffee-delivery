import { styled } from 'styled-components'

export const CoffeeListContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
`
export const CoffeeGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
