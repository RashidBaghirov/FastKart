import React, { useState, useEffect } from "react";



function Adverts() {
    const [adverts, setvadverts] = useState([]);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/6.jpg",
                title: "50% special offer",
                title2: "Chocolate Shake Back in ",
                title3: "Offer Of the Week!"
            },
            {
                id: 2,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/7.jpg",
                title: "Special hot sale",
                title2: "Healthy & Fresh Cool ",
                title3: "Choose a Nutritious & Healthy Breakfast."
            },

        ];

        setvadverts(fakeApiData);
    }, []);

 return (
    <div className="advertss">
        <div className="container-fluid">
            <div className="row">
                {adverts.map((advert) => (
                    <div className="col-6" key={advert.id}>
                        <div className="image" style={{
                            height: '330px',
                            backgroundImage: `url(${advert.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            display: 'block',
                        }}>
                            <div className="title">
                                <div className="w-75">
                                    <h2 className="text-great  text-danger">{advert.title}</h2>
                                    <h3 className="mb-1">{advert.title2}</h3>
                                    <h4 className="text-content">{advert.title3}</h4>
                                    <button className="btn ">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

}


export default Adverts;