import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser} from '../slices/userslice';


export const Newhome = () => {
    const dispatch = useDispatch();
    const [numbers, setnums] = useState({
        num1: "",
        num2: ""
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setnums(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
var add1;
    const add = (e) => {
        e.preventDefault();
        add1=parseInt(numbers.num1)+parseInt(numbers.num2)
        dispatch(addUser(add1));
    };
var mul1;
    const mul = (e) => {
        mul1=parseInt(numbers.num1)*parseInt(numbers.num2)
        e.preventDefault();
        dispatch(addUser(mul1)); 
    };

    return (
        <div>
            <form>
                <label>Number 1: </label>
                <input
                    type="number"
                    value={numbers.num1}
                    name="num1"
                    onChange={handlechange}
                />
                <label>Number 2: </label>
                <input
                    type="number"
                    value={numbers.num2}
                    name="num2"
                    onChange={handlechange}
                />
            </form>
            <button onClick={add}>Add</button>
            <button onClick={mul}>Multiply</button>
        </div>
    );
};











// import React from 'react';
// import { useState } from 'react';

// export const Newhome = () => {
//   const [formdata, setformdata] = useState({
//     name: "",
//     age: ""
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setformdata((curr) => {
//       return {
//         ...curr,
//         [name]: value
//       };
//     });
//   }

//   return (
//     <div>
//       <label>Name:</label>
//       <input name="name" type="text" value={formdata.name} onChange={handleChange} />
//       <br />
//       <h1>{formdata.name}</h1>

//       <label>Age:</label>
//       <input name="age" type="number" value={formdata.age} onChange={handleChange} />
//       <br />
//       <h1>{formdata.age}</h1>
//     </div>
//   );
// };





// import React from 'react'
// import { useState } from 'react'

// export const Newhome = () => {
//     const [name,setName]=useState('')
//     const [age,setAge]=useState('')
//     function handleChange(e){
//         setName(e.target.value)
//         console.log(name)
//         setAge(e.target.value)
//         console.log(age)
//     }
//   return (
//     <div>
//          <lable>Name</lable>
//          <input name="name" type="text" value={name} onChange={handleChange} /><br /
//          <h1>{name}</h1>
                
//         <label>age:</label>
//         <input name="age" type="number" value={age} onChange={handleChange} /><br/>
//         <h1>{age}</h1>

//     </div>
//   )
// }












// import React from 'react'
// import { useState } from 'react'

// export const Newhome = () => {
//     const [name,setName]=useState('')
//     const [age,setAge]=useState('')
//     function handleChange(e){
//         setName(e.target.value)
//         console.log(name)
//         setAge(e.target.value)
//         console.log(age)
//     }
//   return (
//     <div>
//          <lable>Name</lable>
//          <input name="name" type="text" value={name} onChange={handleChange} /><br /
//          <h1>{name}</h1>
                
//         <label>age:</label>
//         <input name="age" type="number" value={age} onChange={handleChange} /><br/>
//         <h1>{age}</h1>

//     </div>
//   )
// }

