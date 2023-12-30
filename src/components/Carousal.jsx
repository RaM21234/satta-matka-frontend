import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (

        <div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item  pb-6  text-xl text-black text-center pt-4 space-y-2  font-bold ">
                        <h2>{item.name}</h2>
                        <p>Number: {item.number}</p>
                        <p>Time1: {item.time1}</p>
                        <p>Time2: {item.time2}</p>
                        <button class="btn bg-blue-800 mx-20 text-white">Jodi</button>
                        <button class="btn bg-blue-800 mx-20 text-white">Panel</button>
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default Carousal
