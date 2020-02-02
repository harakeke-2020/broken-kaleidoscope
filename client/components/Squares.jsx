import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Square extends React.Component {
  constructor () {
    super()
    this.state = {
      height: '50px',
      width: '50px',
      background: randomHexColor()
    }
  }

  clickHandler = evt => {
    if (this.state.height === '50px') {
      this.setState({ height: '150px',
        width: '150px',
        background: randomHexColor() })
    } else {
      this.setState({
        height: '50px',
        width: '50px',
        background: 'black' })
    }
  }

  mouseclick2 = evt => {
    this.setState({
      height: '150px',
      width: '150px',
      background: randomHexColor()
    })
  }

  render () {
    return (
    <>
    {/* <div onClick={this.mouseOver}> */}
      <div
        onClick={() => {
          this.clickHandler()
          // this.mouseOver()
        }}
        style={{
          background: this.state.background,
          height: this.state.height,
          width: this.state.width
        }}></div>
    {/* </div> */}
      </>
    )
  }
}

export default Square
