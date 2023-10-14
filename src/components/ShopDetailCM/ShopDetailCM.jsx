import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: (index) => {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
};

function Detail() {
    const [btns, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    const [isClicked, setIsClicked] = useState(null);

    const handleClick = (button) => {
        setIsClicked(button.id);
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                text: "1/2 KG",
            },
            {
                id: 2,
                text: "1 KG",
            },
            {
                id: 3,
                text: "1.5 KG",
            },
            {
                id: 4,
                text: "Red Roses",
            },
            {
                id: 5,
                text: "With Pink Roses",
            },
        ];

        setServices(fakeApiData);
    }, []);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png",
                name: "Meatigo Premium",
                gram: "450 GR",
                price: "$70.00",
            },
            {
                id: 2,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/24.png",
                name: "Dates Medjoul",
                gram: "400 GR",
                price: "$60.00",
            },
            {
                id: 3,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/25.png",
                name: "Good Life Walnut",
                gram: "250 GR",
                price: "$50.00",
            },
            {
                id: 4,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/26.png",
                name: "Apple Red Premium",
                gram: "1 KG",
                price: "$40.00",
            },
        ];

        setProducts(fakeApiData);
    }, []);
    return (
        <>
            <div id="Detail">
                <div className="container-fluid">
                    <div className="row capp">
                        <div className="col-9 title">
                            <div className="tit">
                                <p>Creamy Chocolate Cake</p>
                            </div>
                        </div>
                        <div className="col-3">
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
                                    Creamy Chocolate Cake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row detail">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-5">
                                    <Slider {...settings}>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/3.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="slick">
                                            <img
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/4.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="col-7">
                                    <div className="detail-info">
                                        <div className="percentage">
                                            <p>30% Off</p>
                                        </div>
                                        <div className="name-price-info">
                                            <p className="title">Creamy Chocolate Cake</p>
                                            <div className="price">
                                                $49.50
                                                <p className="realPrice"> $58.46 </p>
                                                <p className="price-percentage"> (8% off) </p>
                                                <p className="starts">
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
                                                    <span>23 Customer Review</span>
                                                </p>
                                            </div>
                                            <p className="info">
                                                Lollipop cake chocolate chocolate cake dessert jujubes.
                                                Shortbread sugar plum dessert powder cookie sweet
                                                brownie. Cake cookie apple pie dessert sugar plum muffin
                                                cheesecake.
                                            </p>
                                        </div>
                                        <div className="weight-time-info">
                                            <form action="">
                                                <p className="title">Weight</p>
                                                <div className="button">
                                                    {btns.map((btn) => (
                                                        <button
                                                            type="button"
                                                            className={`btn btn-outline-success ${isClicked === btn.id ? "green" : ""
                                                                }`}
                                                            key={btn.id}
                                                            onClick={() => handleClick(btn)}
                                                        >
                                                            {btn.text}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="count-add">
                                                    <div class="quantity-price">
                                                        <div class="cart_qty">
                                                            <div class="input-group">
                                                                <button
                                                                    type="button"
                                                                    class="btn qty-left-minus"
                                                                    onClick={decreaseQuantity}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        fill="currentColor"
                                                                        class="bi bi-dash"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                                    </svg>
                                                                </button>
                                                                <input
                                                                    class="form-control input-number qty-input"
                                                                    type="text"
                                                                    name="quantity"
                                                                    value={quantity}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    class="btn qty-right-plus"
                                                                    onClick={increaseQuantity}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        fill="currentColor"
                                                                        class="bi bi-plus"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="addBtn">
                                                        <button className="btn btn-dark">
                                                            Add To Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="heart-compare">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-heart"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                                <span>Add to wishlist</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-shuffle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                                                    />
                                                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                                </svg>
                                                <span>Add to Compare</span>
                                            </div>
                                        </div>

                                        <div className="store-info">
                                            <p className="title">Store Information</p>
                                            <p className="text">
                                                Lollipop cake chocolate chocolate cake dessert jujubes.
                                                Shortbread sugar plum dessert powder cookie sweet
                                                brownie.
                                            </p>

                                            <div className="pro-info">
                                                <ul>
                                                    <li>
                                                        <span>Type: </span> Black Forest
                                                    </li>
                                                    <li>
                                                        <span>SKU: </span> SDFVW65467
                                                    </li>
                                                    <li>
                                                        <span>MFG: </span> Jun 4, 2022
                                                    </li>
                                                    <li>
                                                        <span>Stock: </span> 2 Items Left
                                                    </li>
                                                    <li>
                                                        <span>Tags : </span> Cake, Backery
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="checkOut">
                                                <p>Guaranteed Safe Checkout</p>
                                                <div className="cards">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/1.svg"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/2.svg"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/3.svg"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/4.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="descripton">
                                        <div className="titleDesc">
                                            <p className="title">Description</p>
                                        </div>
                                        <div className="desc-info">
                                            <p className="text">
                                                Jelly beans carrot cake icing biscuit oat cake gummi
                                                bears tart. Lemon drops carrot cake pudding sweet gummi
                                                bears. Chocolate cake tart cupcake donut topping
                                                liquorice sugar plum chocolate bar. Jelly beans tiramisu
                                                caramels jujubes biscuit liquorice chocolate. Pudding
                                                toffee jujubes oat cake sweet roll. Lemon drops dessert
                                                croissant danish cake cupcake. Sweet roll candy
                                                chocolate toffee jelly sweet roll halvah brownie
                                                topping. Marshmallow powder candy sesame snaps jelly
                                                beans candy canes marshmallow gingerbread pie.
                                            </p>

                                            <p className="orc">Organic:</p>
                                            <p className="text">
                                                vitae et leo duis ut diam quam nulla porttitor massa id
                                                neque aliquam vestibulum morbi blandit cursus risus at
                                                ultrices mi tempus imperdiet nulla malesuada
                                                pellentesque elit eget gravida cum sociis natoque
                                                penatibus et magnis dis parturient montes nascetur
                                                ridiculus mus mauris vitae ultricies leo integer
                                                malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus vel facilisis volutpat est velit egestas
                                                dui id ornare arcu odio ut sem nulla pharetra diam sit
                                                amet nisl suscipit adipiscing bibendum est ultricies
                                                integer quis auctor elit sed vulputate mi sit amet
                                                mauris commodo quis imperdiet massa tincidunt nunc
                                                pulvinar sapien et ligula ullamcorper malesuada proin
                                                libero nunc consequat interdum varius sit amet mattis
                                                vulputate enim nulla aliquet porttitor lacus luctus
                                                accumsan.
                                            </p>
                                            <div className="image">
                                                <div className="info">
                                                    <p className="summer">SUMMER</p>
                                                    <p className="veg">VEGETABLE</p>
                                                    <p className="save">Save up to 5% OFF</p>
                                                </div>
                                            </div>
                                            <p className="orc">From The Manufacturer:</p>
                                            <p className="text">
                                                Jelly beans shortbread chupa chups carrot cake jelly-o
                                                halvah apple pie pudding gingerbread. Apple pie halvah
                                                cake tiramisu shortbread cotton candy croissant
                                                chocolate cake. Tart cupcake caramels gummi bears
                                                macaroon gingerbread fruitcake marzipan wafer. Marzipan
                                                dessert cupcake ice cream tootsie roll. Brownie
                                                chocolate cake pudding cake powder candy ice cream ice
                                                cream cake. Jujubes soufflé chupa chups cake candy
                                                halvah donut. Tart tart icing lemon drops fruitcake
                                                apple pie.
                                            </p>
                                            <p className="text">
                                                Dessert liquorice tart soufflé chocolate bar apple pie
                                                pastry danish soufflé. Gummi bears halvah gingerbread
                                                jelly icing. Chocolate cake chocolate bar pudding chupa
                                                chups bear claw pie dragée donut halvah. Gummi bears
                                                cookie ice cream jelly-o jujubes sweet croissant.
                                                Marzipan cotton candy gummi bears lemon drops lollipop
                                                lollipop chocolate. Ice cream cookie dragée cake sweet
                                                roll sweet roll.Lemon drops cookie muffin carrot cake
                                                chocolate marzipan gingerbread topping chocolate bar.
                                                Soufflé tiramisu pastry sweet dessert.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="right-info">
                                <div className="image-stars">
                                    <div className="image">
                                        <img
                                            src="https://themes.pixelstrap.com/fastkart/assets/images/product/vendor.png"
                                            alt="Noodles"
                                        />
                                    </div>
                                    <div className="text-stars">
                                        <p>Noodles Co.</p>
                                        <p className="starts">
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
                                            <span>(36 reviews)</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="noodle-info">
                                    <p className="nood">
                                        Noodles & Company is an American fast-casual restaurant that
                                        offers international and American noodle dishes and pasta.
                                    </p>

                                    <div className="address-contact">
                                        <div className="icon-info">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </div>
                                            <div className="info">
                                                <p>Address:</p>
                                                <p className="addrs">1288 Franklin Avenue</p>
                                            </div>
                                        </div>
                                        <div className="icon-info">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-headphones"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                                                </svg>
                                            </div>
                                            <div className="info">
                                                <p>Contact Seller:</p>
                                                <p className="addrs">(+1)-123-456-789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-info">
                                <div className="title-products">
                                    <div className="title">
                                        <p>Trending Products</p>
                                    </div>
                                    <div className="products">
                                        {products.map((pro) => (
                                            <div className="image-name-price">
                                                <div className="image">
                                                    <img src={pro.img} alt="Products" />
                                                </div>
                                                <div className="name-gr-pr">
                                                    <p className="name">{pro.name}</p>
                                                    <p className="gram">{pro.gram}</p>
                                                    <p className="price">{pro.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="right-info imageRight">
                                <div className="titles">
                                    <p className="title1">Seafood</p>
                                    <p className="title2">Freshes</p>
                                    <p className="title3">Products</p>
                                    <p className="title4">every hour</p>
                                </div>
                                <div className="buttonShop">
                                    <button className="btn btn-warning">
                                        Shop now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Detail;