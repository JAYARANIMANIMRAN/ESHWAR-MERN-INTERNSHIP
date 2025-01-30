import React, { useEffect } from 'react'
import { useState } from 'react'
// export const Clock = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
        
//       setCount(count + 1);
//     };

//     const decrement = () => {
//       setCount(count - 1);
//     };
//   return (
//     <div>
//         <h1>CLOCK</h1>
        
//         <button onClick={increment}>+</button>
//          <h1>{count}</h1> 
//          <button onClick={decrement}>-</button>
//     </div>
//   )
// }




//   return (
//     <div>
//         <h1>CLOCK</h1>
        
        
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count+1)}>+</button>
//       <button onClick={() => setCount(count-1)}>-</button>
//       <button onClick={()=>{setCount(0)}}>reset</button>
        
        

//     </div>
//   )
// }





// import React from 'react'
// import { useState } from 'react'
// export const Clock = () => {
//     const [count, setCount] = useState(0);

//     const updateCount = (action) => {
//         if (action === "increment") {
//           setCount(count + 1);
//         } else if (action === "decrement") {
//           setCount(count - 1);
//         }
//       };
//   return (
//     <div>
//         <h1>CLOCK</h1>
        
//         <button onClick={() => updateCount("increment")}>+</button>
//       <h1>{count}</h1>
//       <button onClick={() => updateCount("decrement")}>-</button>
        
        

//     </div>
//   )
// }






// export const Clock = () => {
//       const [count, setCount] = useState(0);

//       useEffect(() => {console.log('the start value has changed:',count);},[count]);

// return (
//   <div>
//       <h1>CLOCK</h1>
      
      
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count+1)}>+</button>
//     <button onClick={() => setCount(count-1)}>-</button>
//     <button onClick={()=>{setCount(0)}}>reset</button>
//   </div>
// )
// }



export const Clock = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {document.title=`value ${count}`;},[count]);
  // or
  useEffect(() => {document.getElementById("one").InnerHtml=`value ${count}`;},[count]);

return (
<div>
  <h1>CLOCK</h1>
  
  
<h1>{count}</h1>
{/* <h2>{document.title}</h2>  */}
{/* or */}
<h2 id="one"></h2>

<button onClick={() => setCount(count+1)}>+</button>
<button onClick={() => setCount(count-1)}>-</button>
<button onClick={()=>{setCount(0)}}>reset</button>
</div>
)
}