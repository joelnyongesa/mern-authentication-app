import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { UserInfoPage } from './pages/userInformation';
import Login from './pages/Login';import PrivateRoute from './auth/PrivateRoute';
import Signup from './pages/Signup';

export const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route
                path="/"
                element={<PrivateRoute><UserInfoPage /></PrivateRoute>}
            /> */}
            <Route element={<PrivateRoute />}>
                <Route element={<UserInfoPage />} path='/' />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    );
};
