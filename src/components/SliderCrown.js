import React from 'react'
import Slider from "react-slick";
import slider1 from '../images/slider/slider1.jpg'
import slider2 from '../images/slider/slider2.jpg'
import slider3 from '../images/slider/slider3.jpg'
import slider4 from '../images/slider/slider4.jpg'
import slider5 from '../images/slider/slider5.jpg'

function SliderCrown() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={slider1} />
                    </div>
                    <div>
                    <img src={slider2} />
                    </div>
                    <div>
                    <img src={slider3} />
                    </div>
                    <div>
                    <img src={slider4} />
                    </div>
                    <div>
                    <img src={slider5} />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default SliderCrown
