import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer'
import image2 from '../images/image2.png';

function PostOne() {
    return (
        <>
            <NavBar />
            <div className="w-full flex items-center justify-center text-white blog">
                <div className="mx-8 w-full text-center lg:text-left py-52 px-8 flex lg:justify-between items-center">
                    <div className="w-full flex items-center justify-center text-white bg-white rounded-lg shadow-2xl">
                        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                            <div className=" flex flex-col lg:mx-4 justify-center items-center">
                                <img alt="card img" className="lg:w-1/2 justify-center" src={image2} />
                            </div>

                            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                                {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div> */}
                                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full px-8" data-aos="zoom-in" data-aos-delay="500">
                                    <h3 className="text-3xl text-blue-900 font-bold text-center">The Importance of Solar Panels in Pakistan</h3>
                                    <div>
                                        <div className="mt-8 bg-gray-100">
                                            <section data-aos="fade-up">

                                                <div className="p-8" data-aos="fade-in" data-aos-delay="600">
                                                        <p className='my-3 text-xl text-gray-600 font-semibold'>"Solar panels are a viable solution to Pakistan’s energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution."</p>
                                                </div>
                                            </section>
                                        </div>s
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PostOne
