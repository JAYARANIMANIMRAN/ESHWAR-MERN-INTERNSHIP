import React, { useState } from "react";

// function App() {
//   const one = [1, 2, 5];
//   const two = [13, 15, 16];
  
//   const [result, setResult] = useState([]);

//   const add = () => {
//     const combined = one.concat(two);
//     setResult(combined); 
//   };

//   return (
//     <div>
//       <button onClick={add}>Combine Arrays</button>
//       <h1>Result: {result.join(", ")}</h1>
//     </div>
//   );
// }

// export default App;


const Arr = () => {
    var arr1 = [1,2,3]
    var arr2 = [4,5,6,9]
    const combinearr = () => {
        document.getElementById("res").innerHTML = arr1.concat(arr2)
    }
    return(
        <div>
            <h1> array 1 elements: {arr1.join(" ")}</h1>
            <h1> array 2 elements: {arr2.join(" ")}</h1>
            <h1 id="res"></h1>
            <button onClick={combinearr}>Combine</button>
        </div>
    )

}
export default Arr;

// import React, { useState } from 'react';



// export function Dy_Arrcombine() {

//     const [one, setOne] = useState([]); 

//     const [two, setTwo] = useState([]); 

//     const [result, setResult] = useState([]); 



//     const handleInput = () => {

//         const size = parseInt(prompt("Enter size of the first array : "), 10);

//         const tempOne = [];

//         for (let i = 0; i < size; i++) {

//             const element = prompt(`Enter element ${i + 1} for the first array : `);

//             tempOne.push(element);

//         }

//         setOne(tempOne);



//         const size1 = parseInt(prompt("Enter size of the second array : "), 10);

//         const tempTwo = [];

//         for (let j = 0; j < size1; j++) {

//             const elements = prompt(`Enter element ${j + 1} for the second array : `);

//             tempTwo.push(elements);

//         }

//         setTwo(tempTwo);

//     };



//     const add = () => {

//         const combined = one.concat(two); 

//         setResult(combined);

//     };



//     return (

//         <div>

//             <button onClick={handleInput}>Enter Arrays</button>

//             <p>Array One : {one.join(", ")}</p>

//             <p>Array Two : {two.join(", ")}</p>

//             <button onClick={add}>Combine Arrays</button>

//             <p>Result: {result.join(", ")}</p>

//         </div>

//     );

// }