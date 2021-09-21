import React from 'react';
import Input from "./Input";

const FieldForm = ({onChange,label,className,value,type,placeholder,error}) => {

    return (
        <div className="w-full mb-2">
            <label>{label}</label>
            <Input onChange={onChange} className={className} value={value} type={type} placeholder={placeholder}/>
            {error && <p className="text-red-400">Le champ {placeholder} ne doit pas etre vide</p>}
        </div>
    );
};

export default FieldForm;