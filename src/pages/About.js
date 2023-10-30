import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar/NavBar'
import AboutBanner from '../components/AboutBanner'
import TechnicalDetail from '../components/TechnicalDetail'
import SliderCrown from '../components/SliderCrown'

export default function About() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <AboutBanner />
            <TechnicalDetail />
            <SliderCrown />
            <Footer />
        </>
    )
}
