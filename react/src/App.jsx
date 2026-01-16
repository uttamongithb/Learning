import React, { useState } from 'react'

const App = () => {
const [count, setCount] = useState(0);

const plus = () =>{
  setCount(count+1);
}
const minus = () => {
  setCount(count-1)
}

const reset = () =>{
  setCount(0)
}

  return (
    <>
    <div>
      {count}
    </div>

    <div onClick={plus}>
      +
    </div >
    <div onClick={minus}>-</div>
    <div onClick={reset}>reset</div>
    </>
  )
}

export default App