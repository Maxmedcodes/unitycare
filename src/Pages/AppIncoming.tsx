import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function AppIncoming() {
  return (
    <div className="Incoming">
      <div className='AppIncoming'>
        <h2>
        App is Being Built. Its on the Way, check back here Later
        </h2></div>
      <div className="incoming-lottie">
        <DotLottieReact
            src="src/lotties/AppDev.json"
            
            autoplay
            loop
            style={{ width: "70%", height: '70%' }}
        />
      </div>
    </div>
    
  )
}

export default AppIncoming