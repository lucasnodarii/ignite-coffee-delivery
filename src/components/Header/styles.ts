import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  height: 6.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
`
export const PurpleHeaderButton = styled(BaseHeaderButton)`
  background: ${(props) => props.theme['brand-purple-light']};
  color: ${(props) => props.theme['brand-purple-dark']};

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`

export const YellowHeaderButton = styled(BaseHeaderButton)`
  background: ${(props) => props.theme['brand-yellow-light']};
  color: ${(props) => props.theme['brand-yellow-dark']};

  svg {
    color: ${(props) => props.theme['brand-yellow']};
  }
`
