import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product/Product";

const BestSeller = () => {
    const [bests, setbests] = useState([]);
    const [sliderbest, setsliderbest] = useState([])
    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/1.png",
                name: "Bell pepper",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 2,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/2.png",
                name: "Eggplant",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 3,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/3.png",
                name: "Potato",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 4,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/4.png",
                name: "Onion",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 5,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/5.png",
                name: "Baby Chili",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 6,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/6.png",
                name: "Broccoli",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 7,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/7.png",
                name: "Apple",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 8,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/8.png",
                name: "Strawberry",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 9,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/deal/1.png",
                name: "Potato Chips",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
            {
                id: 10,
                img:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/deal/3.png",
                name: "Nithara Coffee",
                vit: "BestSeller",
                price: "71.25",
                disPrice: "65.21"
            },
        ];

        setbests(fakeApiData);
    }, []);



    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/deal/big.png",
                title: "Unisex Small Trolley SuitCase",
                price: "71.25",
                discountprice: "65.21"
            },
            // {
            //     id: 2,
            //     image:
            //         "https://themes.pixelstrap.com/fastkart/assets/images/grocery/deal/big.png",
            //     title: "Unisex Small Trolley SuitCase",
            //     price: "71.25",
            //     discountprice: "65.21",
            // },
            // {
            //     id: 3,
            //     image:
            //         "https://themes.pixelstrap.com/fastkart/assets/images/grocery/deal/big.png",
            //     title: "Unisex Small Trolley SuitCase",
            //     price: "71.25",
            //     discountprice: "65.21",
            // },

        ];

        setsliderbest(fakeApiData);
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        prevArrow: (
            <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{}}
            >
                Previous
            </button>
        ),
        nextArrow: (
            <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
            >
                Next
            </button>
        ),
    };



    const sliderSettings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{}}
            >
                Previous
            </button>
        ),
        nextArrow: (
            <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
            >
                Next
            </button>
        ),
    };
    return (
        <>
            <div className="bestseller">
                <div className="container-fluid">
                    <h2>Fruits & Vegetables</h2>
                    <div className="row">
                        <div className="col-8">

                            <Slider {...sliderSettings}>
                                {bests.map((best) => (

                                    <div className="left side">
                                        <ProductCard key={best.id} product={best} />
                                    </div>

                                ))}
                            </Slider>

                        </div>
                        <div className="col-4">
                            <Link>
                                <img src="./image/Screenshot 2023-10-10 195253.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="offers_box">
                <div className="container-fluid">
                    <div className="image">
                        <img src="/image/Screenshot 2023-10-10 204236.png" alt="" />
                    </div>
                </div>
            </div>

        </>


    );
};

export default BestSeller;
