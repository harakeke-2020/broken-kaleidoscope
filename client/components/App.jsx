import React from 'react'
import Pixel from './Pixel.jsx'
import Colors from './Colors.jsx'

// const App = () => {
//   // Gives a random color

//   let boxArr = []
//   function changeToWhite () {
//     return 'yellow'
//   }

//   for (var i = 0; i < 500; i++) {
//     boxArr.push(<Pixel id={i} function={changeToWhite}/>)
//   }
//   return (
//     <>
//     {boxArr}
//     <Colors />
//     </>
//   )
// }

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  clickHandler = () => {
    this.setState({
      color: 'green'
    })
  }

  render () {
    let boxArr = []
    for (var i = 0; i < 500; i++) {
      boxArr.push(<Pixel id={i} key={i} color={this.state.color}/>)
    }

    return (
      <>
      {boxArr}
      <button onClick={this.clickHandler}>change color</button>
      </>
    )
  }
}

export default App
