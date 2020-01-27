import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6,0)}`

  render () {
    return (
      <div style = {this.state.style}></div>
    )
  }
}

export default Pixel
