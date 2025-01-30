import React, {useState} from 'react';
import Child1 from './child1';//import { Grandmother } from './grandmother';

// function Parent1(){

//     return (
//         <>
//          <h1>Parent Component</h1>
//          <h3>Data from Parent Hello from Parent</h3>
//             <p >Data from child : <span id="msg"></span></p>
//             <Child name="Hello from parent"/>
//         </>
//     )
// }

// export default Parent1;

// const Parent1 = () => {

//     const [parent_message, setParentMessage] = useState("Hello from Parent");
//     const [ child_message, setChildMessage] = useState('hai');

//     const datafromchildd = (message) => {
//         setChildMessage(message);
//     };

//   return (
//     <div>
//         <h1>Parent component</h1>
//         <p>Data from Parent: {parent_message}</p>
//         <p>Data from Child: {child_message}</p>
//         <Child1 msg={parent_message} datatoparent={datafromchildd} />
//         {/* <button onClick={send_message}>Send Data to Parent</button> */}
        
//     </div>
//   )
// }
// export default Parent1;



const Parent1 = () => {
    const [msg,setmsg]=useState("Hi from parent")
    const[childmsg,setchildmsg]=useState('')
    const[grandmamsg,setgrandmamsg]=useState('')
    const onchange=(message,message2)=>
    {
        setchildmsg(message)
        setgrandmamsg(message2)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>{msg}</h1>
        <h2>{childmsg}</h2>
        <h2>{grandmamsg}</h2>
        <Child1 msg={msg} datafromchild={onchange}/>
    </div>
  )
}

export default Parent1;
