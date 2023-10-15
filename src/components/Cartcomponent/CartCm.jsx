import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../cartconnect'; 

function CartCm(props) {
    const { cartItems, removeFromCart } = props;

    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        calculateSubtotal();
    }, [cartItems, quantity]);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculateSubtotal = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += parseFloat(item.price) * quantity;
        });

        setSubtotal(total);
    };

    const removeItem = (itemId) => {
        removeFromCart(itemId); 
    };

    return (
        <>
            <div className="cart">
                <div className="container-fluid">
                    <div className="row caption">
                        <div className="col-10 title">
                            <div className="tit">
                                <p>Cart</p>
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
                                    Cart
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "70px" }}>
                        <div className="col-9">
                            <div className="cart-table">
                                <div className="cart_responsive">
                                    <table>
                                        <tbody>
                                            {cartItems.map((item) => {
                                                const price = parseFloat(item.price);
                                                const disPrice = parseFloat(item.disPrice);
                                                const saving = price - disPrice;
                                                const truncatedName = item.name.length > 10 ? item.name.substring(0, 10) : item.name;
                                                return (
                                                    <tr className="product-box-contain" key={item.id}>
                                                        <td className="product-detail">
                                                            <div className="product border-0">
                                                                <Link style={{ width: "70px" }} className="product-image">
                                                                    <img src={item.img} className="img-fluid blur-up lazyloaded" alt="" />
                                                                </Link>
                                                                <div className="product-detail">
                                                                    <ul>
                                                                        <li className="name">
                                                                            <a href="product-left-thumbnail.html">{item.name}</a>
                                                                        </li>

                                                                        <li className="text-content"><span className="text-title">Sold By:</span> {item.vit}</li>

                                                                        <li className="text-content"><span className="text-title">Quantity</span> - 500 g</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="price_cart">
                                                            <h4 className="table-title text-content">Price</h4>
                                                            <h5>${item.disPrice} <del className="text-content">${item.price}</del></h5>
                                                            <h6 className="theme-color">You Save : ${saving.toFixed(2) }</h6>
                                                        </td>

                                                        <td class="quantity">
                                                            <h4 class="table-title text-content">Qty</h4>
                                                            <div class="quantity-price">
                                                                <div class="cart_qty">
                                                                    <div class="input-group">
                                                                        <button type="button" class="btn qty-left-minus" onClick={decreaseQuantity}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                                            </svg>
                                                                        </button>
                                                                        <input class="form-control input-number qty-input" type="text" name="quantity" readOnly value={quantity} />
                                                                        <button type="button" class="btn qty-right-plus" onClick={increaseQuantity}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="subtotal">
                                                            <h4 className="table-title text-content">Total</h4>
                                                            <h5>${(price * quantity).toFixed(2) }</h5>
                                                        </td>

                                                        <td className="save-remove">
                                                            <h4 className="table-title text-content">Action</h4>
                                                            <button className="save notifi-wishlist" >Save for later</button>
                                                            <button className="remove close_button" onClick={() => removeItem(item.id)}>Remove</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="summery-box p-sticky">
                                <div className="summery-header">
                                    <h3>Cart Total</h3>
                                </div>

                                <div className="summery-contain">
                                    <div className="coupon-cart">
                                        <h6 className="text-content mb-2">Coupon Apply</h6>
                                        <div className="mb-3 coupon-box input-group">
                                            <input type="email" className="form-control" placeholder="Enter Coupon Code Here..." />
                                            <button className="btn-apply">Apply</button>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <h4>Subtotal</h4>
                                            <h4 className="price">${subtotal.toFixed(2)}</h4>
                                        </li>

                                        <li>
                                            <h4>Coupon Discount</h4>
                                            <h4 className="price">(-) 0.00</h4>
                                        </li>

                                        <li className="align-items-start">
                                            <h4>Shipping</h4>
                                            <h4 className="price text-end">$6.90</h4>
                                        </li>
                                    </ul>
                                </div>

                                <ul className="summery-total">
                                    <li className="list-total border-top-0">
                                        <h4>Total (USD)</h4>
                                        <h4 className="price theme-color">${(subtotal + 6.9).toFixed(2)}</h4>

                                    </li>
                                </ul>

                                <div className="button-group cart-button">
                                    <ul>
                                        <li>
                                            <button className="btn btn-animation proceed-btn fw-bold">Process To Checkout</button>
                                        </li>

                                        <li>
                                            <button className="btn btn-light shopping-button text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                                </svg><Link to="/shop">
                                                Return To Shopping
                                                </Link>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCm);

