import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButtonContainer } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    (
                        cartItems.map(cartItem => {
                            return <CartItem key={CartItem.id} item={cartItem} />;
                        })
                    )
                : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CartDropdownButtonContainer onClick={() => 
            {
                history.push("/checkout")
                dispatch(toggleCartHidden())
            }
        }
        > 
            GO TO CHECKOUT 
        </CartDropdownButtonContainer>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));