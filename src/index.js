import React from 'react' //This code is not specific to React. It is general Javascript code.
import ReactDOM from 'react-dom'

//Stateless Functional componenets
//Always return JSX

// function Greeting(){
//   return <h1>This is my first React Component.</h1>
// }

function Greetings2(){
  return(
    <div>
      <h1>Abhinav</h1>
      <Greeting></Greeting>
    </div>
  )
}

const Greeting = () =>{
  return(
    <div>
      <h1>Hello Friend</h1>
    </div>
  )
}

ReactDOM.render(<Greetings2/>, document.getElementById('root'))