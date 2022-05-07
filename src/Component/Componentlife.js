import React from "react";

 class Componentlife extends React.Component{
    
     constructor(props){
         super(props)
         console.log("constructor")
         this.state={
             items:[],
             isLoading:false
         }
         
     }
     async componentDidMount(props){
          console.log("Did mount")
        
          const response=await fetch("https://jsonplaceholder.typicode.com/users")
           var getdata =await response.json();
           console.log(getdata) ;
          
      }
  
     componentWillUnmount(){
         console.log("Will Unmount")
         //distroy function  
     }

      componentWillMount(){
          console.log("will mount")
      }
      render(){
          return(
            //   console.log("render")
            
            <div >
               Data = {this.props.getdata}
            </div>
            
          )
      }
 }
 export default Componentlife