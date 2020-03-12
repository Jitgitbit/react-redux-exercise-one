import React from 'react'

export default function (WrappedComponent) {
  
  const colors = ['green', 'yellow', 'red', 'blue', 'pink', 'purple', 'orange', 'pink', 'black', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * 9)]
  const drunkClassName = randomColor + '-text'                        //===>> Materialize css

  return (props) => {
    return (
      <div className={drunkClassName}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}
