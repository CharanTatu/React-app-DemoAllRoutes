import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Utils/Auth'
function Navigate() {

    // const count = useSelector((state) => state.counter.count)
    const usenavigate = useNavigate()
    const Logoutd = () => {
        alert("Are You Sure!")
        localStorage.clear();
        usenavigate('/login');
    }
    return (
        <div className="card text-center bg-info">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs bg-secondary">

                    {useAuth ? (<></>) : (<></>)}

                    <h>User! Charan</h>
                    <li className="nav-item nav-link">
                        <Link to={"/product"}>Product-Item</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to={"/table"}>Table</Link>
                    </li>
                    {/* <li className="nav-item nav-link">
                        <Link to={"/api"}>ContextApi</Link>
                    </li> */}
                    <li className="nav-item nav-link">
                        <Link to={"/usermanage"}>UserManage</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to={"/post"}>Get</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to={"/posts"}>/Post</Link>
                    </li>
                    <li className="nav-item nav-link" onClick={Logoutd} >
                        Logout
                    </li>
                    {/* <li className="nav-item nav-link">
                        <Link to={"/todos"}>/todos</Link>
                    </li> */}
                    <li className='nav-item nav-link'>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link to={"/register"}>Register</Link>
                    </li>


                </ul>

            </div>
        </div>

    )
}

export default Navigate