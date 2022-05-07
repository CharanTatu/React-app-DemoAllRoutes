import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../Utils/Auth'
function procetedresult() {

    return useAuth() ? <Outlet /> : <Navigate to="/login" />
}

export default procetedresult