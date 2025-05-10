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
                    <p>UnityCare is an app that connects volunteers with individuals in need of companionship, especially in hospital settings. UnityCare empowers individuals to extend support by connecting volunteers with those in need of companionship, especially in hospital settings.</p>

                    <div className="social-links">
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>

                </div>


                <div className="right-content">
                    <div className="right-one">
                        <div className="right-one-header">
                        <h3> <Link to={"/about-us"}> About Us</Link> </h3>
                        </div>
                        
                        <div className="rightone-links">
                                <HashLink smooth to={"/about-us/#our-mission"}>Our Mission</HashLink> 
                                <HashLink to={"/about-us/#our-story"}> Our Story</HashLink> 
                                <HashLink to={"/about-us/#how-it-works"}>How it works</HashLink>
                        </div>
                        
                    </div>
                    <div className="right-two">
                        <h3> <Link to={"/benefits"}>  Benefits </Link> </h3>
                        
                            <div className="right-two-links">
                                <HashLink to={"/benefits/#for-patients"}>     For Patients    </HashLink>  
                              <HashLink to={"/benefits/#for-families"}>   <li>  For Families</li></HashLink> 
                              <HashLink to={"/benefits/#for-healthcare"}>   <li>  For Healthcare Organisations</li></HashLink> 
                            </div>
                       
                    </div>
                    <div className="right-three">
                        <Link to={"/volunteer"}><h3>  Volunteer </h3> </Link>
                        
                            <div className="right-three-links">
                            <HashLink to={"/volunteer/#join-our-community"}>  Join Our Community </HashLink>
                             <HashLink to={"/volunteer/#flexible-opportunities"}> Flexible Opportunities </HashLink>  
                              <HashLink to={"/volunteer/#support-us"}>  Support Us </HashLink>
                            </div>
                            

                        
                    </div>
                    <div className="right-four">
                        <h3> <Link to={"/support-us"}> Support Us  </Link></h3>
                        <div className="right-four-links">
                              <HashLink to={"/support-us/#Financial-contributions"}>     Financial Contributions </HashLink> 
                              <HashLink to={"/support-us/#Corporate-partnerships"}>    Corporate Partnerships  </HashLink>
                             <HashLink to={"/support-us/#Spread-the-word"}>   <li>  Spread the Word</li></HashLink>  



                        </div>
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