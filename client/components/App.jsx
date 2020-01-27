import React from 'react'

import Pixel from './Pixel'

const App = () => {
  const pixelArr = Array.from({ length: 100000 }, () => (<Pixel />))
  return pixelArr
}

export default App
