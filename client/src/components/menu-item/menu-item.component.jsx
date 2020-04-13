import React from "react";

import { withRouter } from "react-router-dom";

import { MenuItemContainer, BackgroundImgContainer, ContentContainer } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImgContainer 
            className="image"
            imageUrl={imageUrl}
        />
        <ContentContainer className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);