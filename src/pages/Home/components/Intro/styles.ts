import { rgba } from 'polished'
import { styled } from 'styled-components'
import introBackground from '../../../../assets/intro-background.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 34rem;
  margin: 0 auto;
  gap: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({
    theme,
  }) => `url(${introBackground}) no-repeat center, linear-gradient(
    0deg, 
    ${theme['base-white']} 0%,
    ${rgba(theme['base-background'], 0.2)} 50%,
    ${theme['base-background']} 100%)`};
  background-size: cover;
`

export const HeroTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 70rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    max-width: 36.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 1rem;
    max-width: 36.75rem;
  }
`

export const ItensContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
