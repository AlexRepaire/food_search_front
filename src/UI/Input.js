import React from 'react';
import './input.module.css';

const Input = (props) => {
    return (
        <input onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;