import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'Fuchsia'
      }
    }
  }

  render () {
    return (
      <div style = {this.state.style}></div>
    )
  }
}

export default Pixel
