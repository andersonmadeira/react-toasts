import React, { createContext, useCallback, useContext, useState } from 'react'

import ToastContainer from '../ToastContainer/ToastContainer'
import { Toast } from '../Toast/Toast.types'

import { ToastContextType, ToastProviderProps } from './ToastProvider.types'
import { ToastContainerProps } from '../ToastContainer/ToastContainer.types'

export const ToastContext = createContext({})

export const useToast = () => useContext<ToastContextType>(ToastContext)

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top',
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
