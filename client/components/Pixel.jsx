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

render () {
  return (

    <div style = {this.state}>
    </div>
  )
}
}

export default Pixel
