import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        id: props.id,
        width: '50px',
        height: '50px',
        backgroundColor: 'rgb(0,0,255)'
      }
    }
    this.red = 0
    this.blue = 255
    this.neighbours = props.neighbours
  }

  changePixelColor = () => {
    // let red = 255
    // return 'rgb(' + red.toString() + ',0,0)'
    this.red++
    // this.blue--
    this.blue = this.blue - 3
    // let red = this.red + 2
    // let blue = this.blue + 2
    return 'rgb(' + this.red.toString() + ',0,' + this.blue.toString() + ')'
  }

  mouseHandler = () => {
    this.setState({
      style: {
        width: '50px',
        height: '50px',
        backgroundColor: this.changePixelColor()
      }
    })
    this.getId()
    this.changeNeighbour()
    // this.getNeighbours()
  }

  getId = () => {
    return console.log(this.state.style.id)
  }

  getNeighbours = () => {
    return (this.neighbours)
  }

  changeNeighbour = () => {
    if (this.id === this.getNeighbours()[0]) {
      this.setState({
        style: {
          width: '50px',
          height: '50px',
          backgroundColor: 'black'
        }
      })
    }
  }
  render () {
    return (
      <div style={this.state.style} onMouseMove={this.mouseHandler}>
      </div>
    )
  }
}

export default Pixel
