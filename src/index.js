import React from 'react'
import ReactDom from "react-dom";
import './index.css'

function BookList(){
  return(
  <section className='booklist'>
    <Book></Book>
    <Book></Book>
    <Book></Book>
    <Book></Book>
  </section>
  )
}

const Book = ()=>{
  return(
    <div className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </div>
  )
}

const Image = () =>{
  return <img src="https://img.bookchor.com/images/cover/719/9789388810968.jpg" alt="Thus Soke Zarathustra" />
}

const Title = () =>{
  return <h1>Thus Spoke Zarathustra</h1>
}

const Author =()=> <h1>Friedrich Nietzsche</h1>

ReactDom.render(<BookList/>, document.getElementById('root'))