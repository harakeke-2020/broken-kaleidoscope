import React from 'react'

const randomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    state = {
      style: randomColor()
    }
  

  handleClick = () => {
    this.setState({
      style: randomColor()
    })
  }

  render () {
    return (
      <>
        <div style={{
          height: '10px',
          width: '10px',
          background: this.state.style
        }}>
        </div>
        <button onClick={this.handleClick}>Change the colors</button>
      </>
    )
  }
}

export default Pixel
