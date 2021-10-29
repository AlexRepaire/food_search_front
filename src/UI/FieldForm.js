import React from 'react';
import Input from "./Input";

const FieldForm = ({onChange,label,className,value,type,placeholder,error, name, max}) => {

    /**
     * modifié l'erreur
     * créer systeme de redux par input
     * créer systeme de validation input
     */
    return (
        <div className="w-full mb-2">
            <label>{label}</label>
            <Input onChange={onChange} name={name} max={max} className={className} value={value} type={type} placeholder={placeholder}/>
            {error && <p className="text-red-400">Le champ {placeholder} ne doit pas etre vide</p>}
        </div>
    );
};

export default FieldForm;