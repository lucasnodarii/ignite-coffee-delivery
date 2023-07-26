import { ReactNode } from 'react'
import { IconContainer, IconWithInfoContainer } from './styles'

interface IconWithInfoProps {
  icon: ReactNode
  text: string | ReactNode
  iconBackground: string
}

export function IconWithInfo({
  icon,
  text,
  iconBackground,
}: IconWithInfoProps) {
  return (
    <IconWithInfoContainer>
      <IconContainer iconBackground={iconBackground}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </IconWithInfoContainer>
  )
}
