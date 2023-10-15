import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../product/Product";

const Kitchen = () => {
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/1.png",
        name: "Redd Bull",
        vit: "Kitchen",
        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 2,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/2.png",
        name: "Monster",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 3,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/3.png",
        name: "Ginger Ale",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 4,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/4.png",
        name: "Onion",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 5,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/5.png",
        name: "Baby Chili",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 6,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/6.png",
        name: "Broccoli",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 7,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/7.png",
        name: "Apple",
        vit: "Kitchen",

        price: "71.25",
        disPrice: "65.21"
      },
      {
        id: 8,
        img:
          "https://themes.pixelstrap.com/fastkart/assets/images/grocery/product/kichen/8.png",
        name: "Strawberry",
        vit: "Kitchen",

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
        <h2>Kitchen & Dining Needs</h2>
        <Slider {...sliderSettings}>
          {drinks.map((drink) => (
            <ProductCard key={drink.id} product={drink} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Kitchen;
