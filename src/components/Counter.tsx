import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
    <h1 className={classes.btn}>{count}</h1>
    <div >
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DECR</button>
    </div>
    </>
  )
}

