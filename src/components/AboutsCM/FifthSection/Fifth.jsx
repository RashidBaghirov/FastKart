import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fifth() {
    const [productss, setComments] = useState([]);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/1.jpg",
                name: "Farmart",
                info: "Fresh Meet Saugage",
            },
            {
                id: 2,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/2.jpg",
                name: "Soda Brand",
                info: "Soda 500ml -20% OFF",
            },
            {
                id: 3,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/3.jpg",
                name: "Beer Brand",
                info: "Soda 500ml -20% OFF",
            },
            {
                id: 4,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/4.jpg",
                name: "Beer Brand",
                info: "Fresh Beer -30% OFF",
            },
            {
                id: 5,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/5.jpg",
                name: "Milk Brand",
                info: "Fresh Milk",
            },
        ];

        setComments(fakeApiData);
    }, []);
    return (
        <>
            <div id="fifth-Section">
                <div className="container-fluid">
                    <div className="row gx-5 sec-5" style={{ backgroundColor: "white" }}>
                        <div className="col-12">
                        <div className="about-us-title text-center">
                            <h4>Our Blog</h4>
                            <h2 className="center">Our Latest Blog</h2>
                            <hr />
                        </div>
                        </div>
                        <div className="latestBlog">
                            <div className="col-12">
                                <div className="row">
                                    <div className="all-products">
                                        {productss.map((product) => (
                                            <div className="products">
                                                <div className="image">
                                                    <img src={product.img} alt="products" />
                                                </div>
                                                <div className="name-info">
                                                    <p className="name">
                                                        {product.name}
                                                    </p>
                                                    <p className="info">
                                                        {product.info}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fifth;