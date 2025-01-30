import React, {useState} from 'react';

import Grandparent from './grandparent';
//     return (

//         <div>
//         <h1>child component</h1>
            
//             <p>Data from Parent : {props.name}</p>
//             <button onClick={()=>{
//                 document.getElementById("msg").innerHTML="Hello from Child"}}>
//                     send data to parent</button>
//         </div>
//     )
// }


// export default Child1;


//  const Child1 = (props) => {

//     const [child_message, setChildMessage] = useState("Hello from Child");

//     const send_message = () => {
//         props.datatoparent(child_message);

//     }

//   return (
//     <div>
//         <h1>Child component</h1>
//         <p>Data from Parent: {props.msg}</p>
//         <button onClick={send_message}>Send Data to Parent</button>
//     </div>
//   )
// };

// export default Child1;


const Child1 = (props,datafromchild) => {
    const[child_msg,setchildmsg]=useState("hello from child")
    const[grandmamsg,setgrandmamsg]=useState('')
    const onchange3=(message3,message4)=>
        {
            setgrandmamsg(message3)
            props.datafromchild(child_msg,message4)

        }
    const sendmsgtoparent=()=>
    {
        props.datafromchild(child_msg)
    }
        

  return (
    <div>
        <h1>Child component</h1>
        <h2>Data from parent :{props.msg}</h2>
        <h2>Data from grandmother :{grandmamsg}</h2>
        <button onClick={sendmsgtoparent}>send to parent </button>
        <Grandparent msg={grandmamsg} datafromgrandmother={onchange3}/>
        {/* <button onClick={sendmsgtoparent}>send to parent </button> */}
    </div>
  )
}

export default Child1;