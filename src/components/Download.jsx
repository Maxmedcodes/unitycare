import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";



export default function Download() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (
        <section className="download-install">

            <div className="download-section1">
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





                        {/* <DotLottieReact
                            src="src\lotties\applestore.json"
                            loop
                            autoplay
                            className='applestore'
                            style={{ width: '150px', height: '100px', padding: "0px", margin: "0px" }}
                        />
                        <DotLottieReact
                            src="src\lotties\googleplay.json"
                            loop
                            autoplay
                            className='googleplay'
                            style={{ width: '150px', height: '100px', padding: "0px", margin: "0px" }}
                        /> */}

                    </div>
                </div>
                <div className="ds1-right">
                    <DotLottieReact
                        src='src\lotties\LogoMain.json'
                        loop
                        autoplay
                        height={70}
                        width={100}
                    />
                </div>

            </div>
            <div className="download-section2">

            </div>
        </section>
    )
}

