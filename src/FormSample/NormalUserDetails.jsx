import React from 'react'
import { useState } from 'react'

export const NormalUserDetails = () => {
    // const[userName,setUserName] = useState("Ram");
    // const[userAge,setUserAge] = useState(22);

    //using Object
    const [user , setUser] = useState({name: "Ram", age:23})

    const handleName = ()=>{
        // setUserName("PRADEEP");
        // condition formate
        // userName == "Ram" ? setUserName("PRADEEP") : setUserName("Ram");
         setUser({...user, name:"PRADEEP"})

    }
    const handleAge = ()=>{
        // setUserAge(20);
        // condition foramte
        // userAge == 22 ? setUserAge(25): setUserAge(22);
        setUser({...user, age:24})
    }
  return (
    <>
    <h1>User Details</h1>
    <h3>{user.name}</h3>
    <h3>{user.age}</h3>
    <button onClick={handleName}>Update user Name</button>
    <button onClick={handleAge}>Update user Age</button>
    </>
  )
}
