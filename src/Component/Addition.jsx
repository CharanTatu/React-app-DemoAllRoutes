import React, { useState } from 'react'

const Addition = () => {
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [users, setUsers]=useState([]);

    const addData =()=>{
       setUsers([...users,{name,email}])
    }
  return (
    <div>
        <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}></input>
           <table border="1">
               <thead>
                   <tr>
                       <th>Name </th>
                       <th>Email</th>
                   </tr>
               </thead>
               {users.map((user)=><h1>
                   <td>
                      Name: {user.name}
                   </td>
                   <td>
                      Email: {user.email}
                   </td>
               </h1>)}
           </table>
           <button onClick={addData}>Add</button>
    </div>
  )
}

export default Addition