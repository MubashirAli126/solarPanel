import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';

function BlogPost() {
    return (
        <div className="w-full flex items-center justify-center text-white blog">
            <div className="mx-8 w-full text-center lg:text-left py-56 px-8 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className=" text-center">
                        <div className="px-12">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t  transition duration-1000 ease-in-out w-full" src={img1} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">The Importance of Solar Panels in Pakistan</h2>
                                        <p className="text-md font-medium">
                                            Solar panels are a viable solution to Pakistan’s energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution.
                                        </p>
                                    </div>
                                    <div className="flex justify-center my-4">
                                        <Link to="/post-one" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Read More
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t transition duration-1000 ease-in-out w-full" src={img2} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">Crown Solar Solutions: Monocrystalline Solar Panels</h2>
                                        <p className="text-md font-medium">
                                        Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years.
                                        </p>
                                    </div>
                                    <div className="flex justify-center my-4">
                                        <Link to="/post-two" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Read More
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <img alt="card img" className="rounded-t transition duration-1000 ease-in-out w-full" src={img3} />
                                        <h2 className="font-semibold my-4 text-2xl text-center ">Crown Solar Solutions: Monocrystalline Solar Panels</h2>
                                        <p className="text-md font-medium ">
                                        Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically.
                                        </p>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <Link to="/post-three" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Read More
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-full lg:w-72 pt-6 lg:mx-12">
            <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Energy calculator
            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div> */}
                </div>
            </div>
        </div>
    )
}

export default BlogPost
