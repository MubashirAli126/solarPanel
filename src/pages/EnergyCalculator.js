import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import EnergyLoadCalculator from '../components/EnergyLoadCalculator ';

const EnergyCalculator = (props) => {

    useDocTitle('MLD | Molad e Konsult - Demo our products')

    return (
        <>
            <div>
                <NavBar />
            </div>
            <EnergyLoadCalculator />
            <Footer />
        </>
    )
}

export default EnergyCalculator;