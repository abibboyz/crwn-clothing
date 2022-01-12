import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;