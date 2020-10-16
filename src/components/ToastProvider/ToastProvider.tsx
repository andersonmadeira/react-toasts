import React, { createContext, useCallback, useContext, useState } from 'react'

import ToastContainer from '../ToastContainer/ToastContainer'
import { Toast } from '../Toast/Toast.types'

import { ToastProviderProps } from './ToastProvider.types'

export const ToastContext = createContext({})

export const useToast = () => useContext(ToastContext)

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
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
