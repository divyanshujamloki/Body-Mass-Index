import React, { useState } from 'react'
import { decr, incByValr, incr,incBr,decBr,incByValBr } from './redux/Actions.jsx/Action';
import { useDispatch, useSelector } from 'react-redux';

export default function Bonus() {
  const [value,setValue]=useState(0)

const styles = {
  border: '2px solid rgb(39 11 11 / 99%)', 
};
const amount=  useSelector(state=>state.amount.amount)
   const Bonus = useSelector(state=>state.bonus.point)
   const dispatch = useDispatch()   

return (
    <>



      <div style={styles}>
        <h1> WEIGHT(KG) </h1>
        <h2>WEIGHT(KG):{Bonus}</h2>
        {/* <button onClick={()=>{dispatch(incBr())}}>increment</button>
        <button onClick={()=>{dispatch(decBr())}}>decrement</button> */}
        <input type='text' placeholder="Enter weidth in kg" onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={e=>{dispatch(incByValBr(value)) }}> Click Here To AddByValue {value} </button>
      </div>
    
        
    </>
    
  )
}
