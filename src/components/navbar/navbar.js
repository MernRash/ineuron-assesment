import React from "react";
import './navbar.scss';
import Logo from '../../media/logo.png';

function NavBar() {

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img src={Logo} alt="ineunon-logo"></img>
            </div>

            <div className="sinup-login-container">
                <span>Are you hiring?</span>
                <span><b>Login</b></span>
                <span><button className="btn">Sign up</button></span>
            </div>
        </div>
    )

}

export default NavBar;