import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem 1.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`
export const CoffeeTag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    background: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const CoffeeName = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`

export const CoffeeLabel = styled.div`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`

export const CoffeeFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['brand-purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme['brand-purple']};
    }
  }
`
