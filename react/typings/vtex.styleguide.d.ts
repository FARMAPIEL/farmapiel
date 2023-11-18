declare module 'vtex.styleguide' {
  import { ComponentType } from 'react'

  export const Input: ComponentType<InputProps>
  export const ToastContext
  export const Alert

  interface InputProps {
    [key: string]: any
  }
}
