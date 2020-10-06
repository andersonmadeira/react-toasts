import React from 'react'
import { queryByTestId, render } from '@testing-library/react'

import ToastContainer from './ToastContainer'
import { ToastContainerProps } from './ToastContainer.types'
import { Toast } from '../Toast/Toast.types'

const getRandomToastList = () =>
  new Array((Math.random() * 5 + 5) | 0)
    .fill(null)
    .map((t: Toast) => ({ text: Math.random().toString(36).substring(7) }))

describe('test toast', () => {
  let props: ToastContainerProps

  beforeEach(() => {
    props = {
      toasts: getRandomToastList(),
    }
  })

  const renderToastContainer = () => render(<ToastContainer {...props} />)

  it('should have toast classname', () => {
    const { getByTestId } = renderToastContainer()

    const toastContainerElement = getByTestId('toast_container')

    expect(toastContainerElement).toHaveClass('toast_container')
  })

  it('should not render because toasts is empty', () => {
    props.toasts = []

    const { queryByTestId } = renderToastContainer()

    const toastContainerElement = queryByTestId('toast_container')

    expect(toastContainerElement).not.toBeInTheDocument()
  })

  it('should contain all toasts', () => {
    const { getByTestId, getByText } = renderToastContainer()

    props.toasts.forEach((t) => expect(getByText(t.text)).toBeInTheDocument())
  })
})
