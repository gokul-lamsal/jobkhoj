import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const RoleDashBoard = {
    seeker: "/seeker/dashboard",
    company: "/company/dashboard",
    admin: "/admin/dashboard",
};
const RoleProtectedRoute = ({ allowedRoles }) => {
    const { user, token } = useContext(AuthContext)
    console.log(allowedRoles,user.role);
    

    if (!user || !token) return <Navigate to="/login" replace />
    if (user.role !== allowedRoles) return <Navigate to="/unauthorized" replace />
    return <Outlet />

}

export default RoleProtectedRoute