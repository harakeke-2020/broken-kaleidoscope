import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: 'rgb(0,0,255)'
      }
    }
    this.red = 0
    this.blue = 255
  }

  randomHexColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  changePixelColor = () => {
    // let red = 255
    // return 'rgb(' + red.toString() + ',0,0)'
    this.red++
    this.blue--
    // let red = this.red + 2
    // let blue = this.blue + 2
    return 'rgb(' + this.red.toString() + ',0,' + this.blue.toString() + ')'
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

  changeColor = () => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.changePixelColor()
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onMouseMove={this.changeColor}>
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
