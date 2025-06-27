import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthForm({ 
    title, 
    buttonText, 
    onSubmit, 
    formData, 
    onInputChange,
    errors = {}
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_1, setShowPassword_1] = useState(false);


    return (
        <div className="auth-container">
            <div className="auth-overlay">
                <h1 className="auth-title">{title}</h1>
                <div className="auth-card">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                        {/* User Name */}
                        <div className="form-group">
                            <label htmlFor="userName" className="auth-form-label">User Name</label>
                            <input 
                                name='userName' 
                                type="text" 
                                className="auth-form-control" 
                                id="userName" 
                                placeholder="Enter your username"
                                value={formData.userName}
                                onChange={onInputChange} 
                            />
                            {errors.userName && <p className="error-text">{errors.userName}</p>}
                        </div>

                        {/* Password */}
                        <div className="form-group password-group">
                            <label htmlFor="password" className="auth-form-label">Password</label>
                            <div className="password-wrapper">
                                <input 
                                    name='password' 
                                    type={showPassword ? "text" : "password"} 
                                    className="auth-form-control" 
                                    id="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={onInputChange}
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        {/* Confirm Password (only in Sign Up) */}
                        {title === "Sign Up" && (
                            <div className="form-group password-group">
                                <label htmlFor="confirmPassword" className="auth-form-label">Confirm Password</label>
                                <div className="password-wrapper">
                                    <input
                                        name="confirmPassword"
                                        type={showPassword_1 ? "text" : "password"}
                                        className="auth-form-control"
                                        id="confirmPassword"
                                        placeholder="Re-enter your password"
                                        value={formData.confirmPassword}
                                        onChange={onInputChange}
                                    />
                                    <span
                                        className="toggle-password"
                                        onClick={() => setShowPassword_1(!showPassword_1)}
                                    >
                                        {showPassword_1 ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="auth-submit-btn"
                        >
                            {buttonText}
                        </button>
                    </form>

                    {/* Switch to sign up/login */}
                    {title === "Login" && (
                        <div className="auth-switch">
                            <p>Don't have an account? <Link to="/Signup" className="auth-link">Sign up</Link></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
