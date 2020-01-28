import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  // Gives a random color
  let boxArr = []
  for (var i = 0; i < 1000; i++) {
    boxArr.push(<Pixel />)
  }
  return boxArr
}

export default App
