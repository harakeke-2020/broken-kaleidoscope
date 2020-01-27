import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '20px',
        width: '20px',
        borderRadius: '20px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = () => {
    this.setState({
      style: {
        height: '20px',
        width: '20px',
        borderRadius: '20px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  mouseEnter = () => {
    this.setState({
      style: {
        height: '20px',
        width: '20px',
        borderRadius: '20px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  render () {
    return (
      <div style = {this.state.style} onClick = {this.clickHandler} onMouseEnter = {this.mouseEnter}></div>
    )
  }
}

export default Pixel
