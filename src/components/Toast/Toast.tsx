import React from 'react'

import { ToastProps } from './Toast.types'

import './Toast.scss'

const Toast: React.FC<ToastProps> = ({ text }) => {
  return <li className="toast">{text}</li>
}

export default Toast
