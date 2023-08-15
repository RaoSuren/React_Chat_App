import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const  ICECREARM_ORDERDE = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  }
}

function icecreamOrder() {
  return {
    type: 
  }
}
const initialState = {
  numOfCake= 10
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake -1,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
const unSub = store.subscibe(() => {
  console.log(store.getStore());
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
