import React,{useState,useReducer} from 'react'


 export const Usereducer = () => {
    function reducerfunction(state,action){
        return{count:state.count+1}
      }
   const[state,dispatch] =useReducer(reducerfunction,{count:55})
  function increment(){
    dispatch()
  }
  function decrement(){
    dispatch()
  }
  console.log(state);

  return (
    <div>
       
       <h1>{state.count}</h1>     
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>    
  

    </div>
  )
}
