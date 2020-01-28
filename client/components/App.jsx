import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return (

    Array.from({ length: 56 }, (v, i) => <Pixel />)

  )
}

export default App
