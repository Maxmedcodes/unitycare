import Logo from "./Logo";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                        <h3>About Us</h3>
                        <ul>
                            <li>Our Mission</li>
                            <li> Our Story</li>
                            <li> How it Works</li>
                        </ul>
                    </div>
                    <div className="right-two">
                        <h3>Benefits</h3>
                        <ul>
                            <li>For Patients</li>
                            <li> For Families</li>
                            <li> For HealthCare Organisations</li>
                        </ul>
                    </div>
                    <div className="right-three">
                        <h3>Volunteer</h3>
                        <ul>
                            <li>join Our Community</li>
                            <li> Flexible Opportunities</li>
                            <li> Support Us</li>
                        </ul>
                    </div>
                    <div className="right-four">
                        <h3>Support Us</h3>
                        <ul>
                            <li>Financial Contributions</li>
                            <li>Corporate Partnerships</li>
                            <li> Spread the Word</li>
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