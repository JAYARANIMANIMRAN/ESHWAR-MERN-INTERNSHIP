import React from 'react'
import {Child} from "./child.js";

export function Parent(){
  const message ="hello from parent";

  return(
  <div>
 <h1> this is parent component</h1>
 <Child message={""} />
    

 </div>
  ); 

}
 
