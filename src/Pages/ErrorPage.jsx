import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function ErrorPage() {
    return (
        <section className="errorpage">

            <div className="error-lottie">
                <DotLottieReact
                    src="src/lotties/404Error.json"
                    className="error-lottie"
                    autoplay
                    loop
                    style={{ width: "100%", height: '100%' }}
                />
            </div>
        </section>
    )
}

export default ErrorPage