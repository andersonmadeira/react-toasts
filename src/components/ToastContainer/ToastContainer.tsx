import React from 'react'

import { ToastContainerProps } from './ToastContainer.types'

import Toast from '../Toast/Toast'

import './ToastContainer.scss'

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return toasts.length > 0 ? (
    <ul data-testid="toast_container" className="toast_container">
      {toasts.map((t, i) => (
        <Toast key={i} text={t.text} />
      ))}{' '}
    </ul>
  ) : null
}

export default ToastContainer
