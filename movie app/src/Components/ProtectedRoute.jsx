import {  Navigate  } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    let loginData = localStorage.getItem("login_suc") ;

    return loginData ? children : <Navigate to="/login" />;  

   
}

