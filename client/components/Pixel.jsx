import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: randomHexColor()
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler}>
      </div>
    )
  }
}

export default Pixel
