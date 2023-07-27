import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  max-width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};
    padding: 0.5rem 0;

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['brand-purple']};
  transition: 0.4s;
  margin: 0.25rem;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['brand-purple-dark']};
  }
`
