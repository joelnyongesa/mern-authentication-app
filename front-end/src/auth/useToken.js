import { useState } from "react";

export const useToken = function () {
    const [token, setTokenInternal] = useState(()=> {
        // Allows us to compute the initial state
        return localStorage.getItem('token');
    });

    const setToken = newToken => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    }

  return [token, setToken]
}