import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useUser } from './useUser';

function PrivateRoute( props ) {
    const user = useUser();

    if (!user) return <Navigate to="/login"/>
  return (
    (<Outlet />)
  )
}

export default PrivateRoute