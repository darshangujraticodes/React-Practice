import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import Parent from "./components/Parent";

function App() {
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


  */

  return (
    <>
      <div>
        <h1>Learn about React Redux toolkit</h1>

        <AddTodo />

        <div className="centerData displayTableData">
          <DisplayTodo />
        </div>

        <div className="centerData">
          <Parent />
        </div>
      </div>
    </>
  );
}

export default App;
