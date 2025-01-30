import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  DOUBLE: "double", // New action added
};

function reducerfunction(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 55 };
    case ACTIONS.DOUBLE:
      return { count: state.count * 2 };
    
  }
}

export const Usereducer3 = () => {
  const [state, dispatch] = useReducer(reducerfunction, { count: 55 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function reset() {
    dispatch({ type: ACTIONS.RESET });
  }

  function double() {
    dispatch({ type: ACTIONS.DOUBLE });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>Reset 55</button>
      <button onClick={double}>Double ×2</button> 
    </div>
  );
};
