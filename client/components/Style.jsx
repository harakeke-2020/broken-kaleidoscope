import React from 'react'

const Style = props => {
  return (
    <div style={{
      width: '50px',
      height: '50px',
      background: props.colorChange
    }}>
    </div>
  )
}

export default Style
