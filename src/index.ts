import { useContext } from 'react'
import ToastContext from './ToastContext'

export { ToastProvider } from './components'

export const useToast = () => useContext(ToastContext)
