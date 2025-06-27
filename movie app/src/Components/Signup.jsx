import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import Swal from 'sweetalert2';

export default function Signup() {
  const [UserData, setUserData] = useState({ userName: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const getData = (e) => {
    setUserData({
      ...UserData,
      [e.target.name]: e.target.value
    });
  };

  const signup = () => {
    const { userName, password, confirmPassword } = UserData;
    const newErrors = {};

    // ====== Validations ======
    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    } else if (/^(.)\1+$/.test(userName)) {
      newErrors.userName = "Username can't be repeating one letter (e.g. 'aaaa')";
    } else if (!/^[a-zA-Z0-9_]+$/.test(userName)) {
      newErrors.userName = "Username can only contain letters, numbers, and underscores";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter and one number";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // ====== Check if username already exists ======
    const savedUsers = JSON.parse(localStorage.getItem("loginData")) || [];
    if (savedUsers.some(user => user.userName === userName)) {
      newErrors.userName = "Username is already taken";
    }

    // ====== Show errors if any ======
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // ====== Save new user ======
    const newUser = { userName, password };
    savedUsers.push(newUser);
    localStorage.setItem("loginData", JSON.stringify(savedUsers));

    // ====== Success message ======
    Swal.fire({
      title: 'Success!',
      text: 'Account created successfully!',
      icon: 'success',
      background: 'rgba(0, 0, 0, 0.95)',
      color: '#fff',
      confirmButtonColor: '#dc3545'
    }).then(() => {
      localStorage.setItem("login_suc", "true");
      navigate("/Login");
    });
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Sign up page</title>
      </Helmet>
      <AuthForm 
        title="Sign Up"
        buttonText="Sign Up"
        onSubmit={signup}
        formData={UserData}
        onInputChange={getData}
        errors={errors}
      />
    </>
  );
}
