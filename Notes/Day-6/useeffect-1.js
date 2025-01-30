import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    
    const [seconds , setSecond] = useState(0)

    useEffect (() =>{
        const interval = setInterval(() => {
            setSecond(prevSeconds => prevSeconds + 1);
        }, 500);
        return () => clearInterval(interval);}
       ,[] );
    
  return (
    <div>
        <h1>Timer:</h1>
        <p>{seconds} seconds have passed.</p>

    </div>
  )
}

export default TimerComponent