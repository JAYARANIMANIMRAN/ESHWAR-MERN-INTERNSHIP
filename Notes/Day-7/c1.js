import React from 'react'
import {C2} from './c2'
import {C5} from './c5'
export const C1 = (props) => {
    var msg = "c5 hello from component 1";
    console.log(msg)
  return (
    <div><h1>C1 Component</h1>
    <C2/>
    <C5 msg={msg}/>
    </div>
  )
} 

