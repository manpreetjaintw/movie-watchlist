import React from 'react';
import { Route, Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = () => {
    const location = useLocation();
    const isAuthenticate = localStorage.getItem("token");

    if (!isAuthenticate) {
        return <Navigate to='/login'  replace state={{preUri:location.pathname}} />;
    }
    return <Outlet />
};



