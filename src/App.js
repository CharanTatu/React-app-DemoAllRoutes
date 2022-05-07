import React from 'react';
import Componentlife from './Component/Componentlife';
import DevTool from './Component/login';
import DevData from './Component/Dev';
import SelectHandle from './Component/SelectHandle';
import Productcard from './Component/Productcard';
import Addition from './Component/Addition';
import Navigate from './Component/Navigate';
import './App.css'
import UseRef from './Component/UseRef';
import UserManagement from './Component/UserManagement';
import Context from './Component/Context';
import ContextApi from './Component/contextApi';
import TableData from './Component/TableData';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostData from './Component/PostData';
import PostDatabyID from './Component/PostDatabyID';
import Pagenotfound from './Component/Pagenotfound'
import Register from './Component/auth/Register';
import Login from './Component/auth/Login';
import Publicroute from './Component/auth/Publicroute';
import Procetedresult from './Component/auth/Procetedresult';

//  import  ReactDOM from 'react-dom';
// const element = <h1>Hello Element</h1>
// ReactDOM.render(element,document.getElementById("root"));

//====================================================================

// function Dev(props) {
//   return <h1>Hello, {props.name},Team</h1>;
// }
// const element = <Dev name="Mobile" />;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


function App() {

  // const [data, setData] = useState(null);
  // const [print, setPrint] = useState(false);

  // //  const [text , setText]=useState([])
  // //    console.log(text);

  // //    useEffect (()=>{
  // //     devfetch();
  // //    },[])

  // //   const devfetch=async()=>{
  // //     const res = await fetch("https://fakestoreapi.com/products")
  // //     const datafetch = await res.json();
  // //     setText(datafetch);
  // //   }

  // const getData = (e) => {
  //   setData(e.target.value)
  //   setPrint(false)
  // }

  return (


    // <div id='devtool' >

    //   {
    //     print ?
    //       <h1>{data}</h1>
    //       : null
    //   }
    //   <input type="text" onChange={getData}></input>
    //   <button onClick={() => setPrint(true)}>Print value</button>
    //   {/* <DevTool />
    //   <DevData />
    //   <SelectHandle />
    //   <Componentlife Data =": data"/>  */}
    //   <Productcard />
    //   {/* <Addition /> */}
    //   {/* <UserManagement /> */}
    //   {/* <TableData /> */}
    //   {/* <Context />
    //   <UseRef />
    //   <ContextApi /> */}

    // </div>
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route element={<Publicroute />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<Procetedresult />}>
          <Route path='/api' element={<ContextApi />} />
          <Route path='/product' element={<Productcard />} />
          <Route path='/table' element={<TableData />} />
          <Route path='/usermanage' element={<UserManagement />} />
          <Route path='/post' element={<PostData />} />

          <Route path='/posts' element={<PostDatabyID />} />
          <Route path='/posts/:userId' element={<PostDatabyID />} />

          <Route path='/todos' element={<PostDatabyID />} />
          <Route path='/todos/:userId' element={<PostDatabyID />} />
        </Route>

        <Route path='*' element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>

  );

}


export default App;
