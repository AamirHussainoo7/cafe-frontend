import React from 'react'

// function temp({flag}) {
//   return flag ? <h1>Flag is true</h1>:<h1>flag is false</h1>
   
  
// }

// function temp({flag}) {
//     const handleClick=()=>{
//         alert("Hello world");
//     };
//     const handleSubmit=(name)=>{
//         alert(`Hello ${name}`)
//     }
//   return <div>
//     <button onClick={handleClick}>Click here</button>
//     <button onClick={()=>handleSubmit("Aamir")}>Submit here</button>
//   </div>
   
  
// }
import { useState } from 'react';
// usesate
function temp() {
    const [score,setScore] = useState(0);
    const updateScore=()=>{
        setScore(score+1);
    }
    const DecreaseScore=()=>{
        setScore(score-1);
    }
    const resetScore=()=>{
        setScore(0);
    }
  return <div>
    {score}
    <p>
        <button onClick={updateScore}>Increase </button>
        <button onClick={DecreaseScore}> Decrease</button>
        <button onClick={resetScore}>Reset </button>
    </p>
  </div>;
   
  
}

export default temp;