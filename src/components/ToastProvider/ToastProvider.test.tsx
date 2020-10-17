import React from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import { useToast, default as ToastProvider } from './ToastProvider'
import { ToastContextType, ToastProviderProps } from './ToastProvider.types'

describe('test toast provider', () => {
  it('should be able to add toast', () => {
    const randomToastText = Math.random().toString(36).substring(7)
    const wrapper: React.FC<ToastProviderProps> = ({ children }) => (
      <ToastProvider>{children}</ToastProvider>
    )
    const { result } = renderHook<ToastProviderProps, ToastContextType>(
      () => useToast(),
      { wrapper }
    )

    const lengthBeforeAdding = result.current.toasts.length

    act(() => {
      result.current.addToast(randomToastText)
    })

    const { toasts } = result.current

    expect(toasts.length).toBe(lengthBeforeAdding + 1)

    const toastFound = toasts.find((t) => t.text === randomToastText)

    expect(toastFound).not.toBe(undefined)
  })

  it('should be able to remove toast', () => {
    const randomToastText = Math.random().toString(36).substring(7)
    const wrapper: React.FC<ToastProviderProps> = ({ children }) => (
      <ToastProvider>{children}</ToastProvider>
    )
    const { result } = renderHook<ToastProviderProps, ToastContextType>(
      () => useToast(),
      { wrapper }
    )

    const lengthBeforeAdding = result.current.toasts.length

    act(() => {
      result.current.addToast(randomToastText)
    })

    const { toasts: toasts1 } = result.current

    expect(toasts1.length).toBe(lengthBeforeAdding + 1)

    const toastFound1 = toasts1.find((t) => t.text === randomToastText)

    expect(toastFound1).not.toBe(undefined)

    const lengthBeforeRemoving = result.current.toasts.length

    act(() => {
      result.current.removeToast(randomToastText)
    })

    const { toasts: toasts2 } = result.current

    expect(toasts2.length).toBe(lengthBeforeRemoving - 1)

    const toastFound2 = toasts2.find((t) => t.text === randomToastText)

    expect(toastFound2).toBe(undefined)
  })
})
