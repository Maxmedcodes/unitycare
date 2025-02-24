import React from "react";
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <footer className="footer">
            <div>

                <div className="footer-tos">
                    <p>UnityCare ©{year}</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>GDPR</p>
                    <p>Trust and Safety at UnityCare</p>

                </div>
                <div className="footer-social">
                    <p>Follow us on social media</p>
                    <div className="footer-social-icons">
                        <i className="fab fa-facebook-f">Facebook</i>
                        <i className="fab fa-twitter">Twitter</i>
                        <i className="fab fa-instagram">Instagram</i>
                        <i className="fab fa-linkedin-in">LinkedIn</i>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;