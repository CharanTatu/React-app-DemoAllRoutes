import React, { useState } from 'react'

function UserManagement() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [edit, setEdit] = useState(false)
    const [users, setUser] = useState([])
    const [curentuser, setCurentuser] = useState("")

    const editUser = (param) => {

        const { name, email, address } = users.find((user) => user.email === param)
        setName(name)
        setEmail(email)
        setAddress(address)
        setCurentuser(param)
        setEdit(true)
    }

    const deleteUser = (email) => {

        const index = users.findIndex((user) => user.email === email)
        if (index > -1) {
            let copy = [...users];
            copy.splice(index, 1);
            setUser(copy);
        }
    }

    const updateuser = (e) => {
        e.preventDefault()
        //copy [index]=user
        const user = {
            name,
            email,
            address,
        };
        const index = users.findIndex((user) => user.email === curentuser);
        let copy = [...users];
        copy.splice(index, 1, user)
        setUser(copy)

        setName(" ")
        setEmail(" ")
        setAddress("")
        setCurentuser("")
        setEdit(false)

    }

    const adduser = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            address,
        };
        setUser([...users, user])
        setName("")
        setEmail("")
        setAddress("")
    };
    return (
        <div className='container'>
            <div className='row '>
                <div className='col'>
                    <form onSubmit={(e) => (edit ? updateuser(e) : adduser(e))}>

                        <input type='text'
                            placeholder="name"
                            className='form-control mb-2'
                            value={name} onChange={(e) => setName(e.target.value)} >
                        </input>
                        <input type='text'
                            placeholder="email"
                            className='form-control mb-2'
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type='text'
                            placeholder="address"
                            className='form-control mb-2'
                            value={address} onChange={(e) => setAddress(e.target.value)} />

                        <button className='form-control btn btn-primary'>{edit ? "Edit User" : "Add user"}</button>

                    </form>
                </div>
            </div>
            <table className="table table-bordered m-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ name, email, address }) => {

                        return (
                            <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{address}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => editUser(email)}> Edit  </button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteUser(email)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserManagement