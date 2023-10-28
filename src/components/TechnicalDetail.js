import React from 'react'

function TechnicalDetail() {
    return (
        <div className="bg-gray-100 py-10" id='portfolio'>
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">The Eight Technical Features</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">01</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                182 Mm Wafers
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">02</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                Low Voltage Design
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">03</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                Reinforced Structural Design
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">04</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                Non-Destructive Cutting Edge Tehnology
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">05</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                High Density Packaging
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">06</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                High Conversion Rate
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">07</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                Integrated Delivery Solution
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">08</h4>
                            <p className="text-lg font-bold leading-5 text-center mb-4">
                                Easy To Install
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TechnicalDetail
