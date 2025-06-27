import { Link, useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';
import Swal from 'sweetalert2';

export default function Navbar() {
    let navigate = useNavigate();
    const location = useLocation();
    
    const swalCustomClass = {
        popup: 'swal-dark',
        title: 'swal-title',
        content: 'swal-content',
        confirmButton: 'swal-confirm-btn'
    };

    function clear() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, logout!',
            background: 'rgba(0, 0, 0, 0.95)',
            color: '#fff',
            customClass: swalCustomClass,
            
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear("loginData");
                localStorage.clear("login_suc");
                navigate("/Signup");
                Swal.fire({
                    title: 'Logged Out!',
                    text: 'You have been successfully logged out.',
                    icon: 'success',
                    background: 'rgba(0, 0, 0, 0.95)',
                    color: '#fff',
                    customClass: swalCustomClass,
                    
                });
            }
        });
    }

    const handleNavClick = (e) => {
        const isLoginPage = location.pathname === "/Login";
        const isSignupPage = location.pathname === "/Signup";
        
        if ((isLoginPage || isSignupPage) && !localStorage.getItem("login_suc")) {
            e.preventDefault();
            Swal.fire({
                title: 'Login Required!',
                text: 'Please login first to access this feature.',
                icon: 'info',
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Go to Login',
                background: 'rgba(0, 0, 0, 0.95)',
                color: '#fff',
                customClass: swalCustomClass,
                
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/Login");
                }
            });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/HOME" onClick={handleNavClick}>Netflix</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/HOME" onClick={handleNavClick}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNavClick}>
                                Movie
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/Mday" onClick={handleNavClick}>Trending-Day</Link></li>
                                <li><Link className="dropdown-item" to="/Mweek" onClick={handleNavClick}>Trending-Week</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNavClick}>
                                TV
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/Tday" onClick={handleNavClick}>Trending-Day</Link></li>
                                <li><Link className="dropdown-item" to="/Tweek" onClick={handleNavClick}>Trending-Week</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    {localStorage.getItem("login_suc") ? (
                        <div className="d-flex">
                            <button onClick={clear} type="button" className="nav-btn">Logout</button>
                        </div>
                    ) : (
                        <div className="d-flex">
                            <Link to="/Login"><button type="button" className="nav-btn me-2">Login</button></Link>
                            <Link to="/Signup"><button type="button" className="nav-btn">Sign up</button></Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
