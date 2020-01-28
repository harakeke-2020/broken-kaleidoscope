import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Style extends React.Component {
  constructor () {
    super()

    this.state = {
      style: randomHexColor()
    }
  }

  componentDidMount () {
    this.change = setInterval(() => this.setState({ style: randomHexColor() }), 20)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
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
        height: '50px',
        width: '50px',
        backgroundColor: this.state.style
      }}>
      </div>
      </>
      )
    }
}

export default Style
