import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  state = {
    clicked: true
  }
  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    const pixelArray = Array.from({length: 1000}, (v, i) => (<Pixel clickRecord{}/>))
    return (
      <>
        <div>{pixelArray}</div>
        <button onClick={this.clickHandler}>Click to change ze colors</button>
      </>
    )
  }
}

export default App
