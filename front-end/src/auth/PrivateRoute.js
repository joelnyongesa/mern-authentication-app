import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from './useUser';

function PrivateRoute( props ) {
    const user = useUser();

    if (!user) return <Navigate to="/login" replace={true}/>
  return (
    <Route { ...props} />
  )
}

export default PrivateRoute