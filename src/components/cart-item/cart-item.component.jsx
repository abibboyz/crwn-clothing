import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import '../cart-item/cart-item.styles.scss';

const CartItem = ({item: {price, imageUrl, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    </div>
);

export default CartItem;