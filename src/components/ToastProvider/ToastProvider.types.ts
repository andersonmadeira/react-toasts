import { Toast } from "../Toast/Toast.types"

export interface ToastProviderProps {
  children: React.ReactNode
  position?: 'top' | 'bottom'
}

export type AddToastCallback = (text: string) => void

export type RemoveToastCallback = (text: string) => void

export type ToastContextType = {
  toasts?: Toast[],
  addToast?: AddToastCallback,
  removeToast?: RemoveToastCallback
}
