import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amountreducer } from './components/redux/Reducers/AccountsRed';
import { Bonusreducer } from './components/redux/Reducers/BonusRed';
import { applyMiddleware, createStore,combineReducers } from 'redux'
 import logger from "redux-logger"
 import thunk from 'redux-thunk'
 import {Provider} from 'react-redux';
import  Bmireducer  from './components/redux/Reducers/Bmi';


 const store = createStore(combineReducers({

  amount : Amountreducer,
  bonus:Bonusreducer,
  BMI:Bmireducer
}),
  
  applyMiddleware(logger,thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App/>
  </Provider>
    
  </React.StrictMode>
);
