import React from "react";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import { CollectionItemContainer, BackgroundImgContainer, CollectionFooterContainer, CollectionItemButton } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImgContainer 
                className="image"
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </CollectionFooterContainer>
            <CollectionItemButton onClick={() => addItem(item)} inverted> 
                Add To Cart 
            </CollectionItemButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);