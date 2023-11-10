import { useDispatch, useSelector } from "react-redux"
import {tobmi} from "../Constants"

import { Bonusreducer } from "./BonusRed";


const initialState = {
    amount: '',
    bonus: ''
  };

 function Bmireducer(state={bmi:1},action){
    

    switch(action.type){
 
case tobmi: 
const {amount,bonus}=action.payload

const bmi = ((bonus/ Math.pow(amount, 2))*10000);

return {bmi:bmi}



default: return state;  
    }
   

}

export default Bmireducer;