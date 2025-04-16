import React from "react";
import Logo from "./Logo";
import { Link, Navigate as naviagte } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { bubble as Menu } from 'react-burger-menu'

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

                    <HashLink smooth to={"/#app-download"} className="nav-download">
                        Download
                    </HashLink>
                    {/* <li>Download</li> */}

                </div>

                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hamburger-page">
                    <div class="hide-scroll">
                        <Menu right width={'30%'} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} noOverlay >
                            <ul className="hamburger-list">
                                <li> <Link to={"/about-us"}>About us</Link></li>
                                <li> <Link to={"/benefits"}>Benefits</Link></li>
                                <li> <Link to={"/volunteer"}>Volunteer</Link></li>
                                <li> <Link to={"/support-us"}>Support Us</Link></li>
                                <li> <HashLink smooth to={"/#app-download"} className="nav-download">Download</HashLink></li>

                            </ul>
                        </Menu>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Header;
