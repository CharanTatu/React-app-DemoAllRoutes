import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../Utils/Auth'
function publicroute() {
    return !useAuth() ? <Outlet /> : <Navigate to="/" />
}

export default publicroute