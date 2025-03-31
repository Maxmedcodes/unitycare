import React from "react";
import Logo from "./Logo";
import { Link, Navigate as naviagte } from "react-router-dom";

function Header() {
    return (
        <header>
            <Logo />

            <div className="navbar">


                <div className="nav-header">
                    <nav>
                        <ul>
                            <li > <Link to={"/about-us"}>About us</Link></li>
                            <li> <Link to={"/benefits"}>Benefits</Link></li>
                            <li> <Link to={"/volunteer"}>Volunteer</Link></li>
                            <li> <Link to={"/support-us"}>Support Us</Link></li>

                        </ul>

                    </nav>
                </div>
                <div className="navbar-download">
                    <ul className="nav-download">
                        <li>Download</li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </header>
    );
}

export default Header;