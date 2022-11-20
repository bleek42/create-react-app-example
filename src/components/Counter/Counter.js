import React from 'react'
import Button from '../Button/Button';

const Counter = (props) => {
  return (
    <main>
        <p> {props.count} </p>
        <Button btnTxt="increment count" handler={props.increment} id={1} />
        <Button btnTxt="decrement count" handler={props.decrement} id={2} />
    </main>
  )
}

export default Counter