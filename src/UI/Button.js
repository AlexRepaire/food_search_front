import React from 'react';

const Button = (props) => {
    let color;

    // eslint-disable-next-line default-case
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
    }

    return (
        <button type="button" onClick={props.onClick} className={color}>
            {props.children}
        </button>
    );
};

export default Button;