import React, { useState } from 'react'

import { dec, inc ,incByVal} from './redux/Constants';
import { decr, getUser, incByValr, incr } from './redux/Actions.jsx/Action';
import { useDispatch, useSelector } from 'react-redux';


export default function Accounts( ) {

const [value,setValue]=useState(0) 

const [val,setVal]=useState(0) 
const amount=  useSelector(state=>state.amount.amount)
   const Bonus = useSelector(state=>state.bonus.point)
   const dispatch = useDispatch()   


const styles = {
  border: '2px solid rgb(39 11 11 / 99%)', 
};

return (
    <>


      <div style={styles}>
        <h1> HEIGHT (CM) </h1>
        <h2>HEIGHT(CM): {amount}</h2>
        {/* <button onClick={()=>{dispatch(incr())}} >Increment</button>
        <button onClick={()=>{dispatch(decr())}}>Decrement</button> */}
        <input type='text' placeholder="Enter weidth in cm" onChange={(e)=>setValue(+e.target.value)}/>
       
        <button onClick={e=>{dispatch(incByValr(value)) }}> Click Here TO AddByValue {value} </button><br>

        </br>
        {/* <input type='text' onChange={(es)=>setValue(+es.target.value)}/>
        <button onClick={e=>{dispatch(getUser(value)) }}>Init</button> */}
      </div>
    
        
    </>
    
  )
}
