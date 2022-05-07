import React from "react";
  
 function DevName (props){
   return (
       <div>
           hello team{props.name}
       </div>
   )
 }


 const DevTool = ()=>{
       
     return (
         <div>
            <DevName name=" : mobile" />
         </div>
     )
 }
 export default DevTool;