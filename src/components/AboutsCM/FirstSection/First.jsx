import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function First() {
    const [bckimgs, setbcgimgs] = useState([]);


    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/about-us/1.jpg",
                classn: "fresh-image"
            },
            {
                id: 2,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/about-us/2.jpg",
                classn: "fresh-image-2"
            },
        ];

        setbcgimgs(fakeApiData);
    }, [])

    return (
        <>
            <section id="about_first">
                <div className="container-fluid">
                    <div className="row caption">
                        <div className="col-10 title">
                            <div className="tit">
                                <p>About</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="icon-word">
                                <div className="icon">
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-house-door-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                        </svg>
                                    </Link>
                                </div>

                                <div className="log">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                    About
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fresh_vegetable">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    {bckimgs.map((img) => (
                                        <div className="col-6" key={img.id}>
                                            <div className={`${img.classn}`}>
                                                <div
                                                    className="bg-size blur-up lazyloaded "
                                                    style={{
                                                        backgroundImage: `url(${img.image})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center center',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'block'
                                                    }}
                                                >
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="fresh-contain p-center-left">
                                    <div>
                                        <div class="review-title">
                                            <h4>About Us</h4>
                                            <h2>We make Organic Food In Market</h2>
                                        </div>

                                        <div class="delivery-list">
                                            <p class="text-content">Just a few seconds to measure your body temperature. Up to 5
                                                users! The battery lasts up to 2 years. There are many variations of passages of
                                                Lorem Ipsum available.We started in 2019 and haven't stopped smashing it since. A
                                                global brand that doesn't sleep, we are 24/7 and always bringing something new with
                                                over 100 new products dropping on the monhtly, bringing you the latest looks for
                                                less.</p>

                                            <ul class="delivery-box">
                                                <li>
                                                    <div class="delivery-box">
                                                        <div class="delivery-icon">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg" class="blur-up lazyloaded" alt="" />
                                                        </div>

                                                        <div class="delivery-detail">
                                                            <h5 class="text">Free delivery for all orders</h5>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="delivery-box">
                                                        <div class="delivery-icon">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg" class="blur-up lazyloaded" alt="" />
                                                        </div>

                                                        <div class="delivery-detail">
                                                            <h5 class="text">Only fresh foods</h5>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="delivery-box">
                                                        <div class="delivery-icon">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg" class="blur-up lazyloaded" alt="" />
                                                        </div>

                                                        <div class="delivery-detail">
                                                            <h5 class="text">Free delivery for all orders</h5>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="delivery-box">
                                                        <div class="delivery-icon">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg" class="blur-up lazyloaded" alt="" />
                                                        </div>

                                                        <div class="delivery-detail">
                                                            <h5 class="text">Only fresh foods</h5>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default First;