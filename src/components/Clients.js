import React from 'react';
import asset0 from '../images/clients/asset0.png';
import asset1 from '../images/clients/asset1.png';
import asset2 from '../images/clients/asset2.png';
import asset3 from '../images/clients/asset3.png';
import asset4 from '../images/clients/asset4.png';
import asset5 from '../images/clients/asset5.png';
import asset6 from '../images/clients/asset6.png';
import asset7 from '../images/clients/asset7.png';
import asset8 from '../images/clients/asset8.png';
import asset9 from '../images/clients/asset9.png';
import asset10 from '../images/clients/asset10.png';
import asset11 from '../images/clients/asset11.png';

const clientImage = {
    height: '3rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                {/* <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">awards & achievements</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                </div> */}

                <div className="p-10" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-12 lg:grid-cols-12">
                        <div className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset0} alt="client" />
                        </div>

                        <div className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset1} alt="client" />
                        </div>
                        <div className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset2} alt="client" />
                        </div>
                        <div className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset3} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} s src={asset4} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset5} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset6} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset7} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset8} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset9} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset10} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img style={clientImage} src={asset11} alt="client" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;