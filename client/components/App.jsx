import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  // Gives a random color
  let boxArr = []
  let neighboursArray = []

  function getNeighbours (currentElement) {
    if (currentElement === 59) {
      let index = currentElement
      neighboursArray.push(index - 1) // left
      neighboursArray.push(index + 1) // right
      neighboursArray.push(index - 3) // top
      neighboursArray.push(index + 3) // buttom
    }

    return neighboursArray
  }
  for (var i = 0; i < 1000; i++) {
    boxArr.push(<Pixel id={i} neighbours={getNeighbours(i)}/>)
  }
  console.log(neighboursArray)
  return boxArr
}

export default App
