import React from 'react';
import {Link} from 'react-router-dom';
const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-8 flex lg:justify-between items-center">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-base font-semibold mb-4'>Sleek Design Durability and sleek attributes makes Monocrystalline Panels worth the pruchase You can enjoy the benefits of solar energy for a long time <br /> with our sleek and sturdy solar panels. They are designed to fit neatly on your roof and blend in with your home's appearance.</p>
                        <p className="text-lg md:text-text-base mb-4">Assemble Create your ideal home aesthetic with custom solutions</p>
                        <p className="text-lg md:text-text-base rounded-xl border-2 p-1.5">With Solar Roof, you can power your home with a solar and energy storage system that is fully integrated and looks great from any angle. <br /> The roof tiles are made of glass and steel, which are durable, strong and weather-resistant. You can schedule a virtual consultation with an expert to learn more about this innovative solution.</p>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link to="/energy-calculator" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Energy calculator
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;