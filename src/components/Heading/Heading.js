import React from 'react'

const Heading = (props) => {
  return (
    <header>
        <h1>This is the header for: {props.text} </h1>
    </header>
  )
}

export default Heading