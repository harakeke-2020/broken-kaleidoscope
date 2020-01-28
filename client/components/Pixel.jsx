import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      backgroundColor: this.randomHexColor(),
      height: '60px',
      width: '60px'
    }
  }

  // this.style = {
  //   backgroundColor: 'cornflowerblue',
  //   width: '40px',
  //   height: '40px'
  // }

randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

clickHandler = evt =>
  this.setState({
    backgroundColor: this.randomHexColor()
  })

onMouseEnter = evt =>
  this.setState({
    backgroundColor: this.randomHexColor()
  })

onContextMenu = evt => {
  evt.preventDefault()
  this.setState({
    backgroundColor: 'black'
  })
}

onDoubleClick = evt =>
  this.setState({
    backgroundColor: 'white'
  })

onDragEnter = evt =>
  this.setState({
    backgroundColor: 'red'
  })

render () {
  return (
    <div style={this.state} onClick={this.clickHandler} onMouseEnter={this.onMouseEnter} onContextMenu={this.onContextMenu} onDoubleClick={this.onDoubleClick} onDragEnter={this.onDragEnter}>
    </div>
  )
}
}

export default Pixel
