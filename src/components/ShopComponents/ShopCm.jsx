import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from "../cartconnect";

function ShopCm(props) {
    const [category, setCategory] = useState([]);
    const [shops, setServices] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/2.png",
                vit: "Vegetable",
                name: "Fresh Bread and Pastry Flour 200 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 2,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/3.png",
                vit: "Vegetable",
                name: "Peanut Butter Bite Premium Butter Cookies",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 3,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/4.png",
                vit: "Vegetable",
                name: "SnackAmor Combo Pack of Jowar Stick and Jowar",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 4,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/5.png",
                vit: "Vegetable",
                name: "Yumitos Chilli Sprinkled Potato Chips 100 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 5,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/6.png",
                vit: "Vegetable",
                name: "Fresh Bread and Pastry Flour 200 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 6,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/7.png",
                vit: "Vegetable",
                name: "Fresh Bread and Pastry Flour 200 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 7,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/8.png",
                vit: "Vegetable",
                name: "Fresh Bread and Pastry Flour 200 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
            {
                id: 8,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/9.png",
                vit: "Vegetable",
                name: "Fresh Bread and Pastry Flour 200 g",
                gram: "250 g",
                disPrice: "08.02",
                price: "15.15",
            },
        ];

        setServices(fakeApiData);
    }, []);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                image:
                    "https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg",
                title: "Vegetables & Fruit",
            },
            {
                id: 2,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg",
                title: "Beverages",
            },
            {
                id: 3,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg",
                title: "Meats & Seafood ",
            },
            {
                id: 4,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg",
                title: "Breakfast & Dairy",
            },
            {
                id: 5,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg",
                title: "Frozen Foods",
            },
            {
                id: 6,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg",
                title: "Biscuits & Snacks ",
            },
            {
                id: 7,
                image: "https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg",
                title: "Grocery & Staples ",
            },
        ];

        setCategory(fakeApiData);
    }, []);

    const handleButtonClick = (cat) => {
        setSelectedCategory(cat.id);
    };

    const addItemToCart = (item) => {
        props.addToCart(item);
      };

    return (
        <>
            <div className="shop">
                <div className="container-fluid">
                    <div className="row caption">
                        <div className="col-10 title">
                            <div className="tit">
                                <p>Shop</p>
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
                                            className="bi bi-house-door-fill"
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
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                    Shop
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-3 ">
                            <div className="cat_cont p-sticky">
                                <div className="categories">
                                    <ul className="nav_ul">
                                        {category.map((cat) => (
                                            <li
                                                className={`nav-item ${selectedCategory === cat.id ? 'green' : ''}`}
                                                key={cat.id}
                                            >
                                                <button className="nav-link" onClick={() => handleButtonClick(cat)}>
                                                    {cat.title}
                                                    <img src={cat.image} alt={cat.title} />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {shops.map((shop) => (
                                    <div className="col-3">
                                        <div className="product">
                                            <div className="image">
                                                <Link to={`/shop/detail/${shop.id}`}>
                                                    <img src={shop.img} alt="product" />
                                                </Link>
                                            </div>
                                            <div className="hover">
                                                <ul>
                                                    <li className="firstt">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            class="bi bi-eye"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            class="bi bi-arrow-clockwise"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                                                            />
                                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            class="bi bi-heart"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="proInfo">
                                                <p>{shop.vit}</p>
                                                <p className="proName">
                                                    <Link>{shop.name}</Link>
                                                </p>
                                            </div>

                                            <div className="value">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-star"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                                <span>(4.0)</span>
                                            </div>
                                            <div className="gram-price">
                                                <p>{shop.gram}</p>
                                                <p>
                                                    <span className="disPrice">{shop.disPrice} </span>
                                                    <span className="price"> {shop.price}</span>
                                                </p>
                                            </div>
                                            <div className="addCount">
                                                <button className="add btn btn-outline-light" onClick={() => addItemToCart(shop)}>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      cartItemCount: state.cart.cartItems.length,
    };
  };
  
  export default connect(mapStateToProps, { addToCart })(ShopCm);
