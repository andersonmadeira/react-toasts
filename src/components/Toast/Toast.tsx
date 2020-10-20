import React from 'react'

import { ToastProps } from './Toast.types'

import './Toast.css'

const Toast: React.FC<ToastProps> = ({ text }) => {
  return (
    <li data-testid="toast" className="amrt__tc__t">
      {text}
    </li>
  )
}

export default Toast
