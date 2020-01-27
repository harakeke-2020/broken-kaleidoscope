import React from 'react'


class Pixel extends React.Component {
  randomHexColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  constructor () {
    super()
    this.state = {
      style: {
        backgroundColor: this.randomHexColor,
        height: '3px',
        width: '3px'
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor
      }
    })
  }

  render () {
    return (
      <div onMouseOver={this.clickHandler} style={this.state.style}></div>
    )
  }
}

export default Pixel
