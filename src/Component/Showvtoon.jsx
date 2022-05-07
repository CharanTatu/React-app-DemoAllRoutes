import React, { useState } from 'react'

const Showvtoon = () => {
     const[name, setName]=useState("")
     const [show, setShow]=useState(false);


  return (
    <div>
        <h1>{show && name}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}>
        </input>
        <button onClick={()=>setShow(!show)} >{show ? "hide":"show"}</button>
    </div>
  )
}

export default Showvtoon