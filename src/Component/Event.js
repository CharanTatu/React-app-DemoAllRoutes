import React from "react";

 function Demo (){

     const EventHandling= (e)=>{
       e.preventDefault()
       console.log("onclick")
       return(
           <form onSubmit ={EventHandling} >
           <button type="Submit" >Submit</button>
           </form>
       )
     }
 }
 export default Demo;