import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
//import cartItems from "./cart-items";
// redux stuff

//store - store data , think of state 
// reducer - function that used to update store 

import { createStore } from 'redux';
import reducer from './reducer'; 
import { Provider } from "react-redux"; 
//Dispatch Method 
import { INCREASE, DECREASE } from "./actions"; 

// //initial Store 
// const initialStore = {
//   cart: cartItems,
//   total: 105,
//   amount: 5
// }

const store = createStore(reducer);//, initialStore);
//  const store = createStore(
//    reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );


console.log(store.getState()); // it can get my first component 
function App() {
  // cart setup

  // Provider is looking for the prop named store 
  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer />
    </Provider>
  );
}

export default App;
