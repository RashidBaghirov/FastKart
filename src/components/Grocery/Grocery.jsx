import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product/Product";

const Grocery = () => {
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/1.png",
        name: "Redd Bull",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 2,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/2.png",
        name: "Monster",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 3,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/3.png",
        name: "Ginger Ale",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 4,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/4.png",
        name: "Onion",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 5,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/5.png",
        name: "Baby Chili",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 6,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/6.png",
        name: "Broccoli",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 7,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/7.png",
        name: "Apple",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 8,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/grocery/8.png",
        name: "Strawberry",
        vit: "Grocery",
        price: "71.25",
        disPrice: "65.21"
      },
    ];

    setdrinks(fakeApiData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
    <div className="vegetables">
      <div className="container-fluid">
        <h2>Grocery & Staples</h2>
        <Slider {...sliderSettings}>
          {drinks.map((drink) => (
            <ProductCard key={drink.id} product={drink} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Grocery;
