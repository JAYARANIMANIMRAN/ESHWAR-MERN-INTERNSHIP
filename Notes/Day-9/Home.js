import React from 'react'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userslice';
export function Home(){
    const dispatch = useDispatch();
    const [formdata,setformdata]=useState({
        name:"",
        age:""
    });
    function handlechange(event) {
        const { name, value } = event.target;
        setformdata((curr) => {
          return {
            ...curr,
            [name]: value
          };
        });
      }
      
const add =(event)=>{
    event.preventDefault();
    dispatch(addUser(formdata));
}
    
  return (
    
    <div className="home-container">
        <h1>Home
            </h1>
            <form>
                <label>name:</label>
                <br/>
                <input name="name" type="text" value={formdata.name} onChange={handlechange} />
                <br />
                
                <label>age:</label>
                <br/>
                <input name="age" type="number" value={formdata.age} onChange={handlechange} />
                <br />
                <button onClick={add}>ADD</button>

            </form>

            

            
        </div>
  )
}








// import React ,{useState}from 'react'

// export const Home = () => {
//     const[name,setName]=useState('')
//     const[age,setAge]=useState('')
// function handleChange(e){
// const{name,value}=e.target;
// console.log(name,value);
   
// }
//   return (
//     <div>
//         <section className='Home'>
//             <h1></h1>
//        <br></br>
//       <label>Name</label>
//       <input name='sana' type='text' value={name.name} onChange={handleChange}></input>
//       <br></br>
//       <br></br>

//       <label>Age</label>
//       <input type='number' value={age.age} onChange={handleChange}></input>
//       <button >ADD</button>

//       </section>
//     </div>
//   )
// }

