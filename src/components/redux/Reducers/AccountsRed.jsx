import {init,
    inc,
    dec,
    incByVal,
    getStateFullfilled,
    getStatePending,
    getStateRejected,
    incB} from "../Constants"


export function Amountreducer(state={amount:0},action){

    switch(action.type){
 case getStateFullfilled: 
 return {amount:action.payload,pending:false}
 
 case getStatePending: 
 return {...state,pending:true}
 
 case getStateRejected: 
 return {...state,error: action.error,pending:false}

 case dec: 
 if(state.amount>0){
    return {amount:state.amount-1}

 }
else {alert("negative not")}
case inc: 
return {amount:state.amount+1}

case incByVal: 
return {amount:state.amount+action.payload} ;

default: return state;  
    }
   

}