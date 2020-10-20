import React from 'react'

import { ToastContainerProps } from './ToastContainer.types'

import Toast from '../Toast/Toast'

import './ToastContainer.css'

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return toasts.length > 0 ? (
    <ul data-testid="toast_container" className="amrt__tc">
      {toasts.map((t, i) => (
        <Toast key={i} text={t.text} />
      ))}{' '}
    </ul>
  ) : null
}

export default ToastContainer
