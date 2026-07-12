import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [count, setCount] =React.useState(0);
  return (
    <div className='App'>
      <h1>COUNTER  APP</h1>
      <p>{count}</p>
    <div className='btn'>
      <button className='btn1' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className='btn2' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrement
      </button>
    </div>
    <button className='btn3' onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
  )
}

export default App
