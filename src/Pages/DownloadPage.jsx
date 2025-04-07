import React from 'react'
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

function DownloadPage() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (

        <section className="downloadpage">
            <div className="download-section1" >
                <div className="ds1-left-app">
                    <div className="download-header">
                        <h1>Download Our New App</h1>
                        <p>No One Heals Alone</p>
                    </div>

                    <div className='downloadapp-text'>
                        <p>Get started with Unity Care today. Our user-friendly app is available for both iOS and Android devices.
                            Download now to request visits for loved ones or begin your volunteer journey.</p>
                    </div>
                    <div className="ds1-left-store">


                        <div className="store-buttons">
                            <GooglePlayButton
                                url={APKUrl}
                                theme={"dark"}
                                className={"googlestore"}
                            />
                            <AppStoreButton
                                url={IOSUrl}
                                theme={"dark"}
                                className={"applestore"}
                            />
                        </div>
                    </div>
                </div>
                <div className="ds1-right-app">
                    <img src="src\assets\images\app-image1.png" alt="" />
                </div>
            </div>
            <div className="download-section2">



                <div className="download-how-header">
                    <div className="download-header-content">
                        <p>How it Works</p>
                        <h1>Get Started in Just</h1>
                        <h2> <span id='download-three'> Three</span>  Steps</h2>
                    </div>
                </div>
                <div className="download-how-main">
                    <div className="download-part1">
                        <h3> Create an Account</h3>
                        <p>Sign up today and begin your volunteering journey with us. Setting up your profile is the first step to making a difference.</p>
                        <img src="src\assets\images\app-image2.png" alt="Unity care App  being displayed on an Iphone" />
                    </div>
                    <div className="download-part2">
                        <h3>Volunteer</h3>
                        <p> Make an impact starting now. Join our community of volunteers bringing compassion and care to every visit.</p>
                        <img src="src\assets\images\app-image3.png" alt="" />
                    </div>
                    <div className="download-part3">
                        <h3>Request</h3>
                        <p>Submit customized volunteer requests based on your specific needs and requirements.</p>
                        <img src="src\assets\images\app-image4.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default DownloadPage