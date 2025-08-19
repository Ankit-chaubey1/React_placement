import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const[count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count>0?count-1:0);
    }
    const reset=()=>{
        setcount(0);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
