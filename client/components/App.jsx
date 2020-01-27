import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return (
    <>
    {Array.from({ length: 3300 }, (v, k) => <Pixel />)}
    </>
  )
}

export default App
