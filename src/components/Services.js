import React from 'react';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-10" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Tier 1 Manufacturer</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Monocrystalline 550W Solar Panel</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img1} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Parameters</h2>
                                <p className="text-md font-medium">
                                    Wattage : 550W   <br />
                                    Open Circuit Voltage : 49.9V   <br />
                                    Efficiency : 22.5%  <br />
                                    Max Power NOCT : 416W  <br />
                                    Open Circuit Volt NOCT : 6.7V  <br />
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Technical Specs</h2>
                                <p className="text-md font-medium">
                                    Weight : 28.5 kg   <br />
                                    Max Voltage : 1500V  <br />
                                    Build : Aluminum Alloy  <br />
                                    Connector : MC4 Compatible  <br />
                                    Fuse Current :20A <br />
                                    Junction Box : IP68  <br />
                                    Dimensions : 2279mm*1134mm*35mm  <br />
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center ">Warranty</h2>
                                <p className="text-md font-medium">
                                    Product : 12 Years  <br />
                                    Power Output Linear : 25 Years  <br />
                                    *Modules shown may be different than those included in final design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
                            <h3 className="text-3xl  text-blue-900 
                            font-normal">Long life performance certified  <br /> <span className='font-black'>Certified with quality checks and international standards</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Crown your roof with Crown Solar Monocrystalline Panels with state of the art Tier 1 Grade Technology superior to all being offered currently in Pakistan. No longer you would have to worry on
                                    faulty parameters, malfunctioning panels, inadequate discharge.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-2/6 flex flex-col lg:mx-4 justify-center">
                        <video src='videos/animation2.mp4' autoPlay loop muted> </video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;