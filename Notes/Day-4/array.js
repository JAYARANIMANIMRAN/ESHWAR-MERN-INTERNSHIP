import React, {useState} from 'react';

export function Arrcombine() {
    const one = [1, 2, 5];
    const two = [13, 15, 16];
    
    const [result,setResult] = useState([]);
  
    const add = () => {
      const combined = one.concat(two);
      
      setResult(combined); 
    };
  
    return (
      <div>
        <p>Array One : {one.join(", ")}</p>
        <p>Array Two : {two.join(", ")}</p>
        <button onClick={add}>Combine Arrays</button>
        
        <p>Result: {result.join(", ")}</p>
      </div>
    );
  }
  