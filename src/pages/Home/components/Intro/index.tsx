import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import introImage from '../../../../assets/intro-image.png'
import { IconWithInfo } from '../../../../components/IconWithInfo'
import { HeroContainer, HeroTextContainer, ItensContainer } from './styles'

export function IntroContainer() {
  const theme = useTheme()
  return (
    <HeroContainer>
      <HeroTextContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </div>
        <ItensContainer>
          <IconWithInfo
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
            iconBackground={theme['brand-yellow-dark']}
          />
          <IconWithInfo
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
            iconBackground={theme['base-text']}
          />
          <IconWithInfo
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
            iconBackground={theme['brand-yellow']}
          />
          <IconWithInfo
            icon={<Coffee weight="fill" />}
            text="O café chega fresquinho até você"
            iconBackground={theme['brand-purple']}
          />
        </ItensContainer>
      </HeroTextContainer>

      <img src={introImage} alt="" />
    </HeroContainer>
  )
}
