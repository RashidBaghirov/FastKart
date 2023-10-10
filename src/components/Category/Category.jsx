import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/1.png",
        title: "Fashion",
        count: "25",
      },
      {
        id: 2,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/2.png",
        title: "Beauty",
        count: "20",
      },
      {
        id: 3,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/3.png",
        title: "Accessories",
        count: "14",
      },
      {
        id: 4,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/4.png",
        title: "Health",
        count: "43",
      },
      {
        id: 5,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/5.png",
        title: "Stationery",
        count: "23",
      },
      {
        id: 6,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/6.png",
        title: "Baby care",
        count: "53",
      },
      {
        id: 7,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/7.png",
        title: "Electronics",
        count: "32",
      },
      {
        id: 8,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/category/8.png",
        title: "Sports",
        count: "56",
      },
    ];

    setCategories(fakeApiData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>,
    nextArrow: <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>,
  };

  return (
    <div className="category">
      <div className="container-fluid">
        <h2>Shop By Categories</h2>
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <div className="category-box-list" key={category.id}>
              <a href="shop-left-sidebar.html" className="category-name" tabIndex="0">
                <h4>{category.title}</h4>
                <h6>{category.count} items</h6>
              </a>
              <div className="category-box-view">
                <a href="shop-left-sidebar.html" tabIndex="0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="img-fluid blur-up lazyloaded"
                    draggable="false"
                  />
                </a>
                <button
                  onClick={() => {
                    window.location.href = "shop-left-sidebar.html";
                  }}
                  className="btn shop-button"
                  tabIndex="0"
                >
                  <span>Shop Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
