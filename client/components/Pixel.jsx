import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '40px',
        width: '40px',
        borderRadius: '40px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  clickHandler = () => {
    let size = this.randomSize()
    this.setState({
      style: {
        height: size,
        width: size,
        borderRadius: size,
        backgroundColor: this.randomHexColor()
      }
    })
  }

  mouseEnter = () => {
    let size = this.randomSize()
    this.setState({
      style: {
        height: size,
        width: size,
        borderRadius: size,
        backgroundColor: this.randomHexColor()
      }
    })
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.refresh(), 1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  refresh = () => {
    let size = this.randomSize()
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        borderRadius: '40px',
        backgroundColor: this.randomHexColor()
      }
    })
  }
  
  randomSize = () => `${Math.floor(20 + Math.random() * Math.floor(20).toString()) + 'px'}`
  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (
      <div style = {this.state.style} onClick = {this.clickHandler} onMouseEnter = {this.mouseEnter}></div>
    )
  }
}

export default Pixel
