import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      backgroundColor: randomHexColor()
    })
  }

  render () {
    return (
      <div style={this.state.style}/>
      <div><button onClick={</div>
    )
  }
}

export default Pixel
