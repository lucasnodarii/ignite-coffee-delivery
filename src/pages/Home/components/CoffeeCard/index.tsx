import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  AddCartWrapper,
  CoffeeCardContainer,
  CoffeeFooter,
  CoffeeLabel,
  CoffeeName,
  CoffeeTag,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  label: string
  image: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.image}`} alt="" />

      <CoffeeTag>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </CoffeeTag>

      <CoffeeName>{coffee.name}</CoffeeName>

      <CoffeeLabel>{coffee.label}</CoffeeLabel>

      <CoffeeFooter>
        <div>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeFooter>
    </CoffeeCardContainer>
  )
}
