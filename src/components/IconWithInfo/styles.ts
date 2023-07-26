import { styled } from 'styled-components'

interface IconContainerProps {
  iconBackground: string
}

export const IconWithInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBackground }) => iconBackground};
  color: ${(props) => props.theme['base-white']};
`
