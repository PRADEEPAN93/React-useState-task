import React from 'react'
import { useState } from 'react'

export const UseStateForm = () => {

    const [user, setUser] = useState({name:"PRADEEP", age:22});

    function handleChangeName(e){
        // const newObject ={...user};
        // newObject.name = e.target.value;
        // setUser(newObject);

        setUser((oldState)=>{
            return{...oldState, name: e.target.value};
        });

    }

    function handleChangeAge(){
        setUser((oldState)=>{
            return{...oldState, age: e.target.value};
        });

    }

  return (
    <>
    <h2>{user.name},{user.age}</h2>
    <form action="">
    <input type="text" placeholder='Enter User Name' 
    onChange={handleChangeName} value={user.name}/>

    <input type="text" placeholder='Enter User Age' 
    onChange={handleChangeAge} value={user.age}/>


    </form>
    
    </>
  )
}
