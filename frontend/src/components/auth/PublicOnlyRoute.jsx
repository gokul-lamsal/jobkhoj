import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { RoleDashBoard } from './RoleProtectedRoute'

// log in vako users lai auth pages haru access garna na dine 

const PublicOnlyRoute = ({ children }) => {
    const { user, token } = useContext(AuthContext)

    if (user && token) {
        const home = RoleDashBoard[(user.role ?? "").toUpperCase()] ?? "/"
        return <Navigate to={home} replace />
    }

    return children
}

export default PublicOnlyRoute
