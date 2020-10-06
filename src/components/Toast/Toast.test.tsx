import React from 'react'
import { render } from '@testing-library/react'

import Toast from './Toast'
import { ToastProps } from './Toast.types'

describe('test toast', () => {
  let props: ToastProps

  beforeEach(() => {
    props = {
      text: 'Something',
    }
  })

  const renderToast = () => render(<Toast {...props} />)

  it('should have toast classname', () => {
    const { getByTestId } = renderToast()

    const toastElement = getByTestId('toast')

    expect(toastElement).toHaveClass('toast')
  })

  it('should toast text', () => {
    const { getByTestId } = renderToast()

    const toastElement = getByTestId('toast')

    expect(toastElement).toHaveTextContent(props.text)
  })
})
