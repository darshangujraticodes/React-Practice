/*

  Redux -> State Management tool

  Redux Toolkit -> Package developed by react to reduce boiler plate

  react-redux -> provide store wheere state value is store.

  state : it is buit in react object which is used to contain data or information which need to share across diferrent components



  Steps for Redux

  step 1: 
  
  install redux library in react app : 

  npm install @reduxjs/toolkit
  npm install react-redux

  step 2: 

  create store using configurestore() provided by @reduxjs/toolkit

  and inside provide reducer  : {}


  step 3:

  import provider and wrap complete react app inside to share store access to all components store = store 
 
  Provider provided by react-redux


  step 4:

  create slice inside feature folder slice is nothing but functionality

  reducer operation logic is written in slice

  slice ==. eg src/features/tood/todoSlice.js

  todoslice contains all action of reducer which is used to perform operation on state in store

  note in slice we have to export reducer and action differently.

  createSlice() is used to create slice in redux toolkit, It required three object property name , intialState, reducers
  reducer contains action fuctions which is used to perform operation on state in store

  step 5:

  Add slice reducer to store 


  */

import { useSelector } from "react-redux";

function App() {
  // note here state data is accessed using useSelector hook with store reducer name state.storeReducername.slice initial state property name
  // const productData = useSelector((state) => state.cartStoreReducer.items);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
