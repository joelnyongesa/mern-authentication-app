import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import axios from "axios";

export const UserInfoPage = () => {
    // Adding the imported hooks
    const user = useUser();
    const [ token, setToken ] = useToken();

    const navigate = useNavigate();

    // Get email, username from the user
    const { id, email } = user;

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <div>
            <h1> Information for { email }</h1>
            <p> Welcome, { email }</p>

            <button> Log Out </button>
        </div>
    )
}