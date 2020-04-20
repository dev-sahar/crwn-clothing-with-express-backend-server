import styled from "styled-components";

export const ContactPageContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-content: center;
    align-self: center;
    padding: 10px 0;
    margin: auto;
    width: 450px;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;
