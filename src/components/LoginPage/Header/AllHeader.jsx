import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
function AllHeader(props) {
    const [isHeaderFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className="allhead">
            <div className={`container-fluid uppp ${isHeaderFixed ? "fixedup" : ""}`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="blue_head">
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            src="https://themes.pixelstrap.com/fastkart/assets/images/logo/1.png"
                                            alt="Page Logo"
                                        />
                                    </Link>
                                </div>
                                <div className="locations">
                                    <div className="icon-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-geo-alt"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </div>
                                    <div className="title">
                                        <p>Locations</p>
                                    </div>

                                    <div className="icon-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-chevron-down"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="searchbar-box">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for products, styles,brands..."
                                    />
                                    <button className="btn search-button" type="button">
                                        Search
                                    </button>
                                </div>
                                <div class="rightside-menu support-sidemenu">
                                    <div class="support-box">
                                        <div class="support-image me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <div class="support-number">
                                            <h2>(123) 456 7890</h2>
                                            <h4>24/7 Support Center</h4>
                                        </div>
                                    </div>
                                    <ul className="icons">
                                        <li className="heart">
                                            <Link className="heart_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="bag">
                                            <Link to='/shopcart' className="bag_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>

                                            </Link>
                                            <div className="count_bag">
                                                <small>{props.cartItemCount}</small>
                                            </div>
                                        </li>

                                        <li className="profile">
                                            <Link to='/login' className="profile_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                </svg>
                                            </Link>
                                            <div className="name_surname">
                                                <div className="title">
                                                    My Account
                                                    <div className="name">
                                                        <p>Jennifer V. Ward</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid down">
                    <div className="row">
                        <div className="col-3">
                            <div class="header-nav-left">
                                <button class="dropdown-category">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                                    <span>All Categories</span>
                                </button>
                                <div class="category-dropdown">
                                    <ul class="category-list">
                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" alt="" />
                                                <h6>Vegetables  Fruit</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" alt="" />
                                                <h6>Beverages</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" alt="" />
                                                <h6>Meats  Seafood</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" alt="" />
                                                <h6>Breakfast  Dairy</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" alt="" />
                                                <h6>Frozen Foods</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg" alt="" />
                                                <h6>Biscuits  Snacks</h6>
                                            </Link>


                                        </li>

                                        <li class="onhover-category-list">
                                            <Link class="category-name">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg" alt="" />
                                                <h6>Grocery  Staples</h6>
                                            </Link>


                                        </li>
                                    </ul>


                                </div>

                            </div>
                        </div>
                        <div className="col-7">
                            <div className="nav">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">
                                            Shop
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to={`/shop/detail/${1}`}>
                                            Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="deal">
                                <img src="/image/Screenshot 2023-10-11 161108.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItemCount: state.cart.cartItems.length,
    };
};

export default connect(mapStateToProps)(AllHeader);