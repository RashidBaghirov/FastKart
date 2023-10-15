import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product/Product"; 

const Vegetables = () => {
  const [vegetables, setvegetables] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/1.png",
        name: "Bell pepper",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 2,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/2.png",
        name: "Eggplant",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 3,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/3.png",
        name: "Potato",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 4,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/4.png",
        name: "Onion",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 5,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/5.png",
        name: "Baby Chili",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 6,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/6.png",
          name: "Broccoli",
          vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 7,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/7.png",
          name: "Apple",
          vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 8,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/fruits-vegetables/8.png",
        name: "Strawberry",
        vit:"Vegetables",
        price: "71.25",
        disPrice: "65.21"
      },
    ];

    setvegetables(fakeApiData);
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
        <h2>Fruits & Vegetables</h2>
        <Slider {...sliderSettings}>
          {vegetables.map((vegetable) => (
            <ProductCard key={vegetable.id} product={vegetable} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Vegetables;
