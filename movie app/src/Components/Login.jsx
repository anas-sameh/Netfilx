import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import AuthForm from './AuthForm';
import Swal from 'sweetalert2';

export default function Login() {
  const [UserData, setUserData] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const check = () => {
    const savedUsers = JSON.parse(localStorage.getItem("loginData")) || [];

    const matchedUser = savedUsers.find(
      user =>
        user.userName === UserData.userName &&
        user.password === UserData.password
    );

    if (matchedUser) {
      Swal.fire({
        title: 'Success!',
        text: 'Login successful!',
        icon: 'success',
        background: 'rgba(0, 0, 0, 0.95)',
        color: '#fff',
        confirmButtonColor: '#dc3545'
      });
      localStorage.setItem("login_suc", "true");
      navigate("/HOME");
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid username or password!',
        icon: 'error',
        background: 'rgba(0, 0, 0, 0.95)',
        color: '#fff',
        confirmButtonColor: '#dc3545'
      });
    }
  };

  const handleInputChange = (e) => {
    setUserData({
      ...UserData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <AuthForm 
        title="Login"
        buttonText="Login"
        onSubmit={check}
        formData={UserData}
        onInputChange={handleInputChange}
      />
    </>
  );
}
