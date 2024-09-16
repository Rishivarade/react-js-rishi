import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD, REDUCE } from '../Redux/actionType'
import { handleIncrement } from '../Redux/action'
const CounterButton = () => {
    const dispatch= useDispatch()
  return (
    <>
        <button onClick={()=>handleIncrement(dispatch)}>REDUCE</button>||||
        <button onClick={()=>handleIncrement(dispatch)}>ADD</button>
        
    </>
  )
}

export default CounterButton