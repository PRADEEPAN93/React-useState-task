import React from 'react'
import { useState } from 'react'

export const Counter= () => {
    const[cartCount, setCartCount] = useState(0);


    const handleClick=()=>{
        setCartCount(cartCount+1);
    }

  return (
    <>
    <h1>Number of Items in the cart: {cartCount}</h1>
    <button onClick={handleClick}>Add to Cart</button>

    </>
  );
};
