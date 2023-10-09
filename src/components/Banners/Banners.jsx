import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image: 'https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/2.jpg',
                title: 'Summer Ice Cream',
                discount: '50% Discount',
            },
            {
                id: 2,
                image: 'https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/3.jpg',
                title: 'Fruits Juice Series',
                discount: 'Today Special',
            },
            {
                id: 3,
                image: 'https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/4.jpg',
                title: 'Eat Healthy Be Healthy',
                discount: 'Combo Offer',
            },
            {
                id: 4,
                image: 'https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/5.jpg',
                title: 'As Fresh As Fruit',
                discount: 'Amazing Deals',
            },
        ];

        setBanners(fakeApiData);
    }, []);

    return (
        <section id='banners'>
            <div className="container-fluid">
                <div className="row">
                    {banners.map((banner) => (
                        <div className="col-3" key={banner.id}>
                            <div className="adverts">
                                <div className="banner-contain">
                                    <Link to="/">
                                        <div
                                            style={{
                                                width: '451px',
                                                height: '244px',
                                                backgroundImage: `url(${banner.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center center',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'block',
                                            }}
                                        >
                                        </div>
                                    </Link>
                                    <div className="banner-detail">
                                        <div>
                                            <h5 className="fw-light mb-2">{banner.discount}</h5>
                                            <h4 className="fw-bold mb-0">{banner.title}</h4>
                                            <button className='shop'>Shop Now

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
