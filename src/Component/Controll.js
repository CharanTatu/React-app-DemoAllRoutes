import React, { useState } from "react";

function Component(){
  const [name, setName]=useState(" ");
  const [email, setEmail]=useState(" ");

   function onSubmit(){
      console.log("name value"+name);
      console.log("email value: "+email);
     }
    return(
        <from onSubmit={onSubmit}>
            <input 
             type="text"
             name="name"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             required
            />
             <input 
             type ="text"
             email ="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
              <input type="submit" value="Submit" />
        </from>
    )
}
export default Component;