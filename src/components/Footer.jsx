import Logo from "./Logo";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <footer className="footer">
            <div className="footer-content">

                <div className="left-content">
                    <Logo />
                    <p>UnityCare is a nonprofit organization that connects volunteers with individuals in need of companionship, especially in hospital settings. UnityCare empowers individuals to extend support by connecting volunteers with those in need of companionship, especially in hospital settings.</p>

                    <div className="social-links">
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>

                </div>


                <div className="right-content">
                    <div className="right-one">
                        <h3> <Link to={"/about-us"}> About Us </Link> </h3>
                        <ul>
                            <li> <HashLink smooth to={"/about-us/#our-mission"}>     Our Mission  </HashLink> </li>
                            <li> <HashLink to={"/about-us/#our-story"}>     Our Story   </HashLink> </li>
                            <li>  <HashLink to={"/about-us/#how-it-works"}>     How it works    </HashLink> </li>




                        </ul>
                    </div>
                    <div className="right-two">
                        <h3> <Link to={"/benefits"}>  Benefits </Link> </h3>
                        <ul>

                            <li> <HashLink to={"/benefits/#for-patients"}>     For Patients    </HashLink>  </li>
                            <li>  <HashLink to={"/benefits/#for-families"}>   <li>  For Families</li></HashLink> </li>
                            <li>  <HashLink to={"/benefits/#for-healthcare"}>   <li>  For Healthcare Organisations</li></HashLink> </li>




                        </ul>
                    </div>
                    <div className="right-three">
                        <Link to={"/volunteer"}><h3>  Volunteer </h3> </Link>
                        <ul>
                            <li><HashLink to={"/volunteer/#join-our-community"}>  Join Our Community </HashLink></li>
                            <li> <HashLink to={"/volunteer/#flexible-opportunities"}> Flexible Opportunities </HashLink>  </li>
                            <li>  <HashLink to={"/volunteer/#support-us"}>  Support Us </HashLink></li>

                        </ul>
                    </div>
                    <div className="right-four">
                        <h3> <Link to={"/support-us"}> Support Us  </Link></h3>
                        <ul>
                            <li>  <HashLink to={"/support-us/#Financial-contributions"}>     Financial Contributions </HashLink> </li>
                            <li>  <HashLink to={"/support-us/#Corporate-partnerships"}>    Corporate Partnerships  </HashLink></li>
                            <li> <HashLink to={"/support-us/#Spread-the-word"}>   <li>  Spread the Word</li></HashLink>  </li>




                        </ul>
                    </div>
                </div>


            </div>
            <div className="footer-tos">
                <p>UnityCare ©{year}</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>GDPR</p>
                <p>Trust and Safety at UnityCare</p>

            </div>
        </footer>
    );
}

export default Footer;