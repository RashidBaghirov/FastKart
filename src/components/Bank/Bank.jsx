import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bank = () => {
    const [offers, setoffers] = useState([]);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image:
                    "/image/Screenshot 2023-10-10 180139.png",

            },
            {
                id: 2,
                image:
                    "/image/Screenshot 2023-10-10 180216.png",

            },
            {
                id: 3,
                image:
                    "/image/Screenshot 2023-10-10 180243.png",
            },

        ];

        setoffers(fakeApiData);
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>,
        nextArrow: <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>,
    };

    return (
        <div className="bank">
            <div className="container-fluid">
                <h2>Bank & Wallet Offers</h2>
                <Slider {...sliderSettings}>
                    {offers.map((offer) => (
                        <div key={offer.id}>
                            <Link>
                                <div className="image">
                                    <img src={offer.image} alt="offers" draggable="false" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Bank;
