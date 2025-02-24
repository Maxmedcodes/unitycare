import React from "react";

function Header() {
    return (
        <header>
            <div className="logo-header">
                <h1>UnityCare</h1>
            </div>
            <div className="navbar">


                <div className="nav-header">
                    <nav>
                        <ul>
                            <li>About us</li>
                            <li>Benefits</li>
                            <li>Volunteer</li>
                            <li>Support Us</li>
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