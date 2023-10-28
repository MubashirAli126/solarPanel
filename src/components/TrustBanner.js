import React from 'react'
import image2 from '../images/certificates-logos.png';

function TrustBanner() {
    return (
        <>
            <div className="bg-gray-100 py-10 text-center" >
                <section data-aos="zoom-in-down">
                    <div className="my-4 py-4" style={{ textAlign: '-webkit-center' }}>
                        <div className="lg:w-2/6 flex flex-col lg:mx-4 justify-center">
                            <video src='videos/solaranimated.mp4' autoPlay loop muted> </video>
                        </div>
                        <h6 className="my-2 text-center text-lg text-blue-900 uppercase font-bold">Long life performance certified</h6>

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Certified with quality checks and international standards</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <p className='my-3 text-xl text-gray-600 font-semibold'>
                            Crown your roof with Crown Solar Monocrystalline Panels with state of the art Tier 1 Grade Technology superior to all being offered currently in Pakistan. No longer you would have to worry on faulty parameters, malfunctioning panels, inadequate discharge.
                        </p>
                        <div className=" flex flex-col lg:mx-4 justify-center items-center">
                            <img alt="card img" className="lg:w-1/4 justify-center" src={image2} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TrustBanner