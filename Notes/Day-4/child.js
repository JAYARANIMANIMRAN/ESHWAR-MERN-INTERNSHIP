import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h1>This is child component </h1>
        <p> {props.message}</p>
        
    </div>
     );
    }