import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  clickHandler = e => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  moveHandler = () => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.randomHexColor()
      }
    })
  }
  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseOver={this.moveHandler}>
      </div>
    )
  }
}

// const Pixel = () => {

//   class
//   return (
//     <>
//     <div style={{
//       width: '50px',
//       height: '50px',
//       backgroundColor: 'red'
//     }}>
//     </div>
//     </>
//   )
// }

export default Pixel
