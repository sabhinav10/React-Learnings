import React from 'react' //This code is not specific to React. It is general Javascript code.
import ReactDOM from 'react-dom'

//Stateless Functional componenets
//Always return JSX

// function Greeting(){
//   return <h1>This is my first React Component.</h1>
// }

const Greeting = () =>{
  return React.createElement('h1',{},"hello world")
}

ReactDOM.render(<Greeting/>, document.getElementById('root'))