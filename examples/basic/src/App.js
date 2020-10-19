import React, { useEffect, useState } from 'react'
import { useToast } from '@andersonmadeira/react-toasts'

const App = () => {
  const [text, setText] = useState('')
  const { addToast, removeToast } = useToast()

  useEffect(() => console.log('addToast changed'), [addToast])

  return (
    <div className="App">
      <input value={text} onChange={({ target }) => setText(target.value)} />
      <button onClick={() => addToast(text)}>Add Toast</button>
      <button onClick={() => removeToast(text)}>Remove Toast</button>
    </div>
  )
}

export default React.memo(App)
