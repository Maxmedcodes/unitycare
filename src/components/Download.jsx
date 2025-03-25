import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Download() {
    return (
        <section className="download-install">

            <div className="download-section1">
                <div className="ds1-left">
                    <h3>Download UnityCare App</h3>
                    <p>No One Heals Alone</p>
                    <div>
                        <p>Get started with Unity Care today. Our user-friendly app is available for both iOS and Android devices.
                            Download now to request visits for loved ones or begin your volunteer journey.</p>
                    </div>
                    <div className="ds1-left-store">
                        <DotLottieReact
                            src="src\lotties\applestore.json"
                            loop
                            autoplay
                            height={100}
                            width={100}
                        />
                        <DotLottieReact
                            src="src\lotties\googleplay.json"
                            loop
                            autoplay
                            height={100}
                            width={100}
                        />
                    </div>
                </div>

            </div>
            <div className="download-section2">

            </div>
        </section>
    )
}

