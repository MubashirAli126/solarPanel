import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import EnergyLoadCalculator from '../components/EnergyLoadCalculator ';

const DemoProduct = (props) => {

    useDocTitle('MLD | Molad e Konsult - Demo our products')

    const [tubeLight, setTubeLight] = useState('')
    const [energySaver, setEnergySaver] = useState('')
    const [energyGenerated, setEnergyGenerated] = useState(null);

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [demoProducts, setDemoProducts] = useState([])
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if (checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter((e) => (e !== value)))
        }

    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setEmail('')
        setPhone('')
        setMessage('')
    }

    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)
        fData.append('products', demoProducts)


        axios({
            method: "post",
            url: process.env.REACT_APP_DEMO_REQUEST_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput()
                //handle success
                Notiflix.Report.success(
                    'Success',
                    response.data.message,
                    'Okay',
                );
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                //handle error
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data.message,
                        'Okay',
                    );
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors)
                }

            });
    }

    const calculateEnergyGenerated = () => {
        console.log(tubeLight)
        // Simple energy generation calculation formula
        const energyGenerated = tubeLight * energySaver;
        setEnergyGenerated(energyGenerated);
    };



    return (
        <>
            <div>
                <NavBar />
            </div>
            <EnergyLoadCalculator />
            {/* <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white py-8  my-4 md:px-12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Calculate your energy</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-5 mt-5">
                                <div>
                                    <input
                                        name="No. of Tubelights"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="1 Tubelight = 75W*"
                                        value={tubeLight}
                                        onChange={(e) => setTubeLight(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>
                                <div>
                                    <input
                                        name="No. of EnergySaver"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="1 Energy Saver = 75W*"
                                        value={energySaver}
                                        onChange={(e) => setEnergySaver(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors &&
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                }
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button onClick={calculateEnergyGenerated}>Calculate</button>
                              
                                    <div>
                                        <p>Energy Generated: {energyGenerated} kWh per day</p>
                                    </div>
                                
                                {/* <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button> */}
                            {/* </div>
                        </div>
                    </form>
                </div>
            </div> */} 

            <Footer />
        </>


    )
}

export default DemoProduct;