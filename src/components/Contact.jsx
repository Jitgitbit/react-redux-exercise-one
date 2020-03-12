import React from 'react'

export default function Contact(props) {
  console.log(`=========>> PROPS IN Contact:`,props)
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <div className='container'>
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolor cum neque nulla modi itaque minus. 
         Mollitia voluptate tempora veritatis dignissimos omnis pariatur, nesciunt, recusandae iure quam eius, libero voluptatum dolores.</p>
    </div>
  )
}
