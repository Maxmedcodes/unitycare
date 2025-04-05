import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import AboutUs from './Pages/AboutUs'
import Benefits from './Pages/Benefits'
import SupportUs from './Pages/SupportUs'
import Volunteer from './Pages/Volunteer'
import DownloadPage from './Pages/DownloadPage'
import HamburgerPage from './Pages/HamburgerPage'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Body />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path='/hamburger' element={<HamburgerPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>


  )
}

export default App
