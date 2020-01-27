import React from 'react'

class Style extends React.Component {
  constructor () {
    super()

    this.state = {
      style: 'blue'
    }
  }

  

  render () {
    return (
    <>
      <div style={{
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