import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Style extends React.Component {
  constructor () {
    super()

    this.state = {
      style: randomHexColor(),
      height: '50px',
      width: '50px',
      borderRadius: '100%'

    }
  }

  componentDidMount () {
    this.change = setInterval(() => this.setState(
      {
        style: randomHexColor(),
        height: '100px',
        width: '100px',
        borderRadius: '25%'
      }), 250)
    this.change = setInterval(() => this.setState(
      {
        // style: randomHexColor()
        height: '150px',
        width: '150px',
        borderRadius: '50%'
      }), 5)
  }

  clickHandler = evt => {
    this.setState({
      style: 'blue'
    })
  }

    moveHandler = evt => {
      this.setState({
        style: 'yellow'
      })
    }

    render () {
      return (
    <>
      <div onClick={this.clickHandler} onMouseEnter={this.moveHandler} style={{
        height: this.state.height,
        width: this.state.width,
        borderRadius: this.state.borderRadius,
        backgroundColor: this.state.style
      }}>
      </div>
      </>
      )
    }
}

export default Style
