import React from 'react';
import './Input.module.css';

const Input = (props) => {
    return (
        <input onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;