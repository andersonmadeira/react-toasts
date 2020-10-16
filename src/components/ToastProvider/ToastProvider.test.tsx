import React from 'react'
import { act, renderHook } from '@testing-library/react-hooks'

import { useToast } from './ToastProvider'

describe('test toast provider', () => { 
  it('should be able to add one toast', () => {
    const randomToastText = Math.random().toString(36).substring(7)
    const { result } = renderHook(() => useToast())

    act(() => {
      result.current.addToast(randomToastText)
    })

    expect(result.current.toasts.length).toBe(1)
  })

  // should exact toast

  // should remove toast
})
