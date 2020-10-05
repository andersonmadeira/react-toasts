import React, { useCallback, useState } from 'react'

import ToastContext from '../../ToastContext'
import ToastContainer from '../ToastContainer/ToastContainer'
import { Toast } from '../Toast/Toast.types'

import { ToastProviderProps } from './ToastProvider.types'

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((text: string) => {
    setToasts((prevToasts) => [...prevToasts, { text }])
  }, [])

  const removeToast = useCallback((text: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.text !== text))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
