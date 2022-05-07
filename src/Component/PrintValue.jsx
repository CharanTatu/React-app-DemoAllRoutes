import React,{useState} from 'react'

function PrintValue() {
    const [data,setData]=useState(null);
    const [print, setPrint]=useState(false);
 
   //  const [text , setText]=useState([])
   //    console.log(text);
 
   //    useEffect (()=>{
   //     devfetch();
   //    },[])
     
   //   const devfetch=async()=>{
   //     const res = await fetch("https://fakestoreapi.com/products")
   //     const datafetch = await res.json();
   //     setText(datafetch);
   //   }
 
     const getData=(e)=>{
        setData (e.target.value)
         setPrint(false)
     }
  return (
    <div id='devtool' >
      
    {
      print?
      <h1>{data}</h1>
      :null
    }
   <input type ="text" onChange={getData}></input>
   <button onClick={()=>setPrint(true)}>Print value</button>
   {/* <DevTool />
   <DevData />
   <SelectHandle />
   <Componentlife Data =": data"/> 
   <Productcard /> */}
   {/* <Addition /> */}
   <UserManagement />
   
 </div>
  )
}

export default PrintValue