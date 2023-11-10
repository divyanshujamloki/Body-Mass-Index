import {init,
    inc,
    dec,
    incByVal,
    getStateFullfilled,
    getStatePending,
    getStateRejected,
    incB,
    decB,
    incByValB} from "../Constants"


export  function Bonusreducer(state={point:0},action){

    switch(action.type){
     case incB: 
    return {point:state.point+1}

    case decB: 
    return {point:state.point-1}
    
    case incByValB: 
    return {point:state.point+action.payload} ;
    
    
    
    default: return state;  
        }
       
    
    }
    