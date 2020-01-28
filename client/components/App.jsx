import React from 'react'

import Pixel from './Pixel'

class App extends React.Component {
  render () {
    return (
      <>
        {Array.from({ length: 3300 }, (v, k) => <Pixel />)}
      </>
    )
  }
}

export default App
