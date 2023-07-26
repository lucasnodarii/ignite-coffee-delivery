import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import {
  HeaderButtonsContainer,
  HeaderContainer,
  PurpleHeaderButton,
  YellowHeaderButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />

      <HeaderButtonsContainer>
        <PurpleHeaderButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </PurpleHeaderButton>

        <YellowHeaderButton>
          <ShoppingCart size={22} weight="fill" />
        </YellowHeaderButton>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
