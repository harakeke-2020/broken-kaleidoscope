import React from 'react'
import Pixel from './Pixel.jsx'

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

// range(0, 99999, 1)

const App = () => {
  return (
    Array.from(({ length: 1000 }), (v, i) => <Pixel />)
  )
}

export default App
