import {init,
    inc,
    dec,
    decB,
    incByVal,
    getStateFullfilled,
    getStatePending,
    getStateRejected,
    incB,incByValB,tobmi} from "../Constants"


import axios from "axios"

export function getUser(id){

    return async(dispatch,getState)=>{
     dispatch(getStatePendingrr())
    
     try{const {data} = await axios.get(`http://localhost:8080/account/${id}`) ;
     dispatch(getStateFullfilledrr(data.amount))}
       catch(error){
 dispatch(getStateRejectedrr(error.message))
       }        
     }
 }
 



 export     function getStatePendingrr(){
         return {type:getStatePending}
     }
 
 export function tobmir(amount,bonus){

    return{type:tobmi,payload:{amount,bonus}}
 }



export function getStateFullfilledrr(value){
     return {type:getStateFullfilled,payload:value}
 }
 
 export function getStateRejectedrr(error){
     return {type:getStateRejected,error:error}
 }
 
 export function incr(){
     return {type:inc}
 }
 
 export function incBr(){
     return {type:incB}
 }

 export function decBr(){
    return {type:decB}
}
 
 export function decr(){
     return {type:dec}
 }


 
 export function incByValr(value){
     return {type:incByVal,payload:value}
 }

 export function incByValBr(value){
    return {type:incByValB,payload:value}
}
 
 