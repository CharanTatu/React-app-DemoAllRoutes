import React from "react";

class SelectHandle extends React.Component{
     
    constructor(props){
        super(props)
     this.state={
         value:'nyn'
      }
      this.handlechang=this.handlechang.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
    }
      handlechang(event){
       this.setState({value:event.target.value})
     }
      handleSubmit(event){
         alert("Your friend: "+ this.state.value)
         event.preventDefault();
      }
     
    render(){

        return(
            <div>
               <form onSubmit={this.handleSubmit}>
            <label>
            Best Friend:
         <select value={this.state.value} onChange={this.handlechang}>
            <option value="nyn">nyn</option>
            <option value="vishal">vishal</option>
            <option value="abi">abi</option>
            <option value="ramu">ramu</option>
         </select>
           </label>
        <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}
export default SelectHandle;