import React from 'react'
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

function DownloadPage() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (

        <section className="downloadpage">
            <div className="download-section1" >
                <div className="ds1-left">
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
            </div>
        </section>
    )
}


export default DownloadPage