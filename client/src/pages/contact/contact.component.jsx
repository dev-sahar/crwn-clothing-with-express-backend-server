import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component"; 

import { ContactPageContainer, TitleContainer } from "./contact.styles";

const ContactPage = () => {

    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const { firstName, lastName, email, message} = contactInfo;

    const handleChange = event => {
        const { name, value } = event.target;
        
        setContactInfo({
            ...contactInfo,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        alert("Message Sent");
        
        setContactInfo({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
    }

    return (
        <ContactPageContainer>
            <TitleContainer>Contact Us</TitleContainer>
            <span>Our team is happy to help. Fill out the form and we'll be in touch as soon as possible.</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type="text"
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type="text"
                    name="message"
                    label="Message"
                    value={message}
                    onChange={handleChange}
                    required
                />

                <CustomButton type="Submit"> Submit </CustomButton>

            </form>
        </ContactPageContainer>
    )
};

export default ContactPage;