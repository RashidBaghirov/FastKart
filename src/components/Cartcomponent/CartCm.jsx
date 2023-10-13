import React from 'react';
import { connect } from 'react-redux';

function CartCm(props) {
    const { cartItems } = props;

    return (
        <div className="shopping-cart">
            <h2>Alışveriş Sepeti</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <img src={item.img} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartCm);
