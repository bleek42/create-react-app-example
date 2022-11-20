import React from 'react'

const Button = (props) => {
  return (
    <button onClick={(ev) => props.handler()} id={props.id}> Click here to:{props.btnTxt} </button>
  )
}

export default Button