import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export const AdviceApp = () => {
    const[advice, setAdvice] = useState("Please Click Button to Get Advice");
    const [count, setCount] = useState(0);

   async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        setAdvice(data.slip.advice)
        setCount((c)=> c + 1 );
    }
    useEffect(function(){
        getAdvice();
    },[]);
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}> Get Advice</button>
        <p>Your Have Read <b>{count}</b> Pieces od Advice</p>

    </div>
  );
};
