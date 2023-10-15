import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product/Product"; 

const Drinks = () => {
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/1.png",
        name: "Redd Bull",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 2,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/2.png",
        name: "Monster",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 3,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/3.png",
        name: "Ginger Ale",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 4,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/4.png",
        name: "Onion",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 5,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/5.png",
        name: "Baby Chili",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 6,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/6.png",
        name: "Broccoli",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 7,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/7.png",
        name: "Apple",
        vit: "Drinks",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 8,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/personal-care/8.png",
        name: "Strawberry",
        vit: "Drinks",
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
        <h2>Drinks</h2>
        <Slider {...sliderSettings}>
          {drinks.map((drink) => (
            <ProductCard key={drink.id} product={drink} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Drinks;
