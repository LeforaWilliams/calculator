import React from "react";

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};
//button component for all the keys on the calculator
const Button = props => {
    return (
        <input
            className={props.className}
            onClick={props.handleClick}
            type="button"
            value={props.children}
        />
    );
};

export default Button;
