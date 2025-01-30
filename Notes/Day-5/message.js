import React, { useState } from 'react';

const Application = () =>{
    const [message,setmessage]=useState("click the button")
    const handleclick=()=>{
        setmessage('hello,you are clicked the button')
    };
    const handleclick2=()=>{
        setmessage('hello,this is sana....')
    }
    return(
    <div>
    <h1>{message}</h1>
    <button onClick={handleclick}>click</button>
    <button onClick={handleclick2}>click2</button>
    </div>
   );
};
export default Application;
