import React from 'react'
import ReactDOM from 'react-dom'
import { ToastProvider } from '@andersonmadeira/react-toasts'

import './custom.css'

import App from './App'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
)
