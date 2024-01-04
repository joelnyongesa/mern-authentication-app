import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { UserInfoPage } from './pages/userInformation';
import Login from './pages/Login';import PrivateRoute from './auth/PrivateRoute';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<PrivateRoute><UserInfoPage /></PrivateRoute>}
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
