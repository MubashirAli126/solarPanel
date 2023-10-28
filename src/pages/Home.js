import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
// import PlayerComponent from '../components/PlayerComponent';
import InstallmentComponent from '../components/InstallmentComponent';
import TrustBanner from '../components/TrustBanner';
import NavBar from '../components/Navbar/NavBar';

const Home = () => {
    return (
        <>
        <NavBar />
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <InstallmentComponent />
            {/* <PlayerComponent /> */}
            <TrustBanner />
            <Cta />
            <Footer />
        </>

    )
}

export default Home;

