import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigat = useNavigate();
    const [username, setName] = useState();
    const [password, setPass] = useState();

    const login = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post("https://mkart-frontend.herokuapp.com/api/v1/auth/login",
                {
                    username,
                    password,
                }
            );
            if (result.data.success) {
                localStorage.setItem("acesstoken", result.data.token)
                navigat("/product")

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container'>
            <div className='row justify-content-center
            align-items-center '>
                <div className='col-5'>
                    <div className='card-header'>
                        <h5 className='card-title'>Login User</h5>
                        <form onSubmit={login}>
                            <input type="text"
                                placeholder='Email'
                                className='form control mb-3'
                                value={username}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            <input type="text"
                                placeholder='password'
                                className='form control mb-3'
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                            >
                            </input>
                            <br></br>
                            <button className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login