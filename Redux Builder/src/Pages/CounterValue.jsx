import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'

const CounterValue = () => {
    const {counter}=useSelector((store)=>store.CounterReducer)
    console.log(counter)
  return (
    <>
        <h1>Counter:{counter}</h1>
    </>
  )
}

export default CounterValue