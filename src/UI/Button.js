import React from 'react';

const Button = (props) => {
    let color;

    switch (props.color) {
        case "blue":
            color = `btnPrimary`;
            break;
        case "red":
            color = `btnDanger`;
            break;
        case "green":
            color = `btnGreen`;
            break;
        default: color = "btnPrimary";
    }

    return (
        <button type="button" onClick={props.onClick} className={color}>
            {props.children}
        </button>
    );
};

export default Button;