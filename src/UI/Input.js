import React from 'react';
import './Input.module.css';

const Input = (props) => {

    const styles = props.className ? `cursor-pointer ${props.className}` : "";

    return (
        <input onChange={props.onChange} step={props.step} name={props.name} checked={props.checked} className={styles} value={props.value} type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;