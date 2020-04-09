import React from "react";

import { CartItemContainer, CartItemImgContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity} }) => (
    <CartItemContainer>
        <CartItemImgContainer src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;