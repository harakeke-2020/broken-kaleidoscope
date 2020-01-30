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
    this.boxArr = []
  }

  render () {
    for (var i = 0; i < 500; i++) {
      this.boxArr.push(<Pixel id={i} />)
    }

    return (
      this.boxArr
    )
  }
}

export default App
