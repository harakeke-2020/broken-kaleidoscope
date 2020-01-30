import React from 'react'

const Colors = () => {
  const mouseClick = () => {
    console.log('hello')
  }
  return (
    <button onClick={mouseClick} id='white'>
      Change color black to white
    </button>
  )
}
export default Colors
