import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Register() {
    const navigat = useNavigate();
    const [username, setName] = useState();
    const [password, setPass] = useState();
    const [conPass, setConPass] = useState();

    const registeruser = async (e) => {
        e.preventDefault()

        try {
            console.log("hi")
            const result = await axios.post("https://mkart-frontend.herokuapp.com/api/v1/auth/register",
                {
                    username,
                    password,
                }
            );
            console.log("data", result)
            if (result.data.success) {
                navigat("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container'>
            <div className='row justify-content-center
            align-items-center ' >
                <div className='col-5'>
                    <div className='card-header'>
                        <h5 className='card-title'>Register User</h5>
                        <div className='card-body'>
                            <form onSubmit={registeruser}>
                                <input type="text"
                                    placeholder='name'
                                    className='form control mb-3'
                                    value={username}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <input type="text"
                                    placeholder='password'
                                    className='form control mb-3'
                                    value={password}
                                    onChange={(e) => setPass(e.target.value)}
                                />

                                <input type="text"
                                    placeholder='conformpassword'
                                    className='form control mb-3'
                                    value={conPass}
                                    onChange={(e) => setConPass(e.target.value)}
                                />
                                <br></br>
                                <button className='btn btn-primary'>Registar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register