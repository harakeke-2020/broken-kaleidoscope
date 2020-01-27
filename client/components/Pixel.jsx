import React from 'react'

class Pixel extends React.Component {
  const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  
  constructor (props) {
    super(props)
    this.state = {
      style: this.randomHexColor
    }
  }
  render () {
    return (
      <div style={{ background: this.state.style }}>
    Hello
      </div>
    )
  }
}

export default Pixel
