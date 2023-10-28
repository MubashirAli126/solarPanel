import React from 'react'
// import CarouselSliders from '../components/CarouselSliders'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar/NavBar'
import AboutBanner from '../components/AboutBanner'
import TechnicalDetail from '../components/TechnicalDetail'

export default function About() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <AboutBanner />
            <TechnicalDetail />
        
            {/* <CarouselSliders images={images} /> */}
            <Footer />
        </>
    )
}
