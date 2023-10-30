import React from 'react';
import img from '../images/solar-panel-cut.png';
import { Link } from 'react-router-dom';
import image2 from '../images/certificates-logos.png';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-t float-right" src={img} />
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">

                        <h3 className="text-3xl  text-green-700 font-bold">A Product of Crown Group of Companies</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Crown Group is a leading supplier of two and three-wheeler automotive spare parts in Pakistan. With the largest dealer network in the country,
                                the company has established a strong reputation for quality and reliability in the automotive industry. Crown Group’s extensive range of products
                                includes everything from engines, suspension systems, brakes, and other essential parts that keep vehicles running smoothly on the roads. In recent years,
                                Crown Group has diversified its business by expanding into the solar panel industry. The company recognized the growing demand for renewable energy in Pakistan and
                                saw an opportunity to reach the masses by providing affordable and reliable solar solutions. Crown Group’s solar panels are designed to meet the needs of residential,
                                commercial, and industrial customers, offering high efficiency and durability at a competitive price. By diversifying into the solar panel industry, Crown Group has expanded
                                its product portfolio and has positioned itself as a leading player in the renewable energy sector in Pakistan. The company’s commitment to quality and innovation has helped
                                it to gain a strong foothold in both the automotive and solar industries, and to establish itself as a trusted partner for customers looking for reliable and affordable
                                solutions.
                            </p>
                        </div>

                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
                        </div>
                        <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Learn More About Crown
                            <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col lg:mx-4 justify-center items-center">
                    <img alt="card img" className="lg:w-1/2 justify-center" src={image2} />
                </div>
            </div>
        </>
    )
}

export default Intro;