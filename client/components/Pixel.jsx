import React from 'react'
import Style from './Style'

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
        <div onClick={this.handleClick}>
          <Style colorChange={this.state.style}/>
        </div>
      </>
    )
  }
}

export default Pixel
