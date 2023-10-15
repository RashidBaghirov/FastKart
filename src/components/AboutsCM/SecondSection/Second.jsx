import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Second = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fakeApiData = [
        {
            id: 1,
            image:
              "https://themes.pixelstrap.com/fastkart/assets/svg/3/work.svg",
            title: "Business Years",
            num: "10",
            desc: " A coffee shop is a small business that sells coffee, pastries, and other morning goods. There are many different types of coffee shops around the world."
         
          },
          {
            id: 2,
            image:
              "https://themes.pixelstrap.com/fastkart/assets/svg/3/buy.svg",
            title: "Products Sales",
            num: "80k",
            desc: "Some coffee shops have a seating area, while some just have a spot to order and then go somewhere else to sit down. The coffee shop that I am going to."
         
          },
          {
            id: 3,
            image:
              "https://themes.pixelstrap.com/fastkart/assets/svg/3/user.svg",
              title: "Happy Customers",
              num: "90%",
              desc:"My goal for this coffee shop is to be able to get a coffee and get on with my day.It's a Thursday morning and I am rushing between meetings."
            
          },

          
    ]
    setData(fakeApiData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="client-section section-lg-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="about-us-title text-center">
              <h4>What We Do</h4>
              <h2 className="center">We are Trusted by Clients</h2>
              <hr />
            </div>
            {data.length > 0 && (
              <Slider {...settings}>
                {data.map((item) => (
                  <div key={item.id} className="clint-contain">
                    <div className="client-icon">
                      <img src={item.image} className="blur-up lazyloaded" alt="" />
                    </div>
                    <h2>{item.num}</h2>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
