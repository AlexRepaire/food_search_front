import React, {useCallback, useEffect, useState} from 'react';
import Input from "../../UI/Input";
import FieldForm from "../../UI/FieldForm";
import specialiteService from "../../services/specialiteService";

const FormRestaurantSignUp = ({modifyIndex,restaurant,setRestaurantHandler,inscriptionRestaurant,specialite}) => {


    const nextStep = e => {
        e.preventDefault();
        inscriptionRestaurant();
    };

    const prevStep = e => {
        modifyIndex(1);
    };

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir les informations du restaurant</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Nom" type="text" placeholder="Nom" name="restNom" value={restaurant.restNom} onChange={setRestaurantHandler}/>
                <FieldForm label="Téléphone" type="number" placeholder="Téléphone" name="restTel" value={restaurant.restTel} onChange={setRestaurantHandler}/>
                <FieldForm label="Siret" type="text" placeholder="Siret" name="restSiret" value={restaurant.restSiret} onChange={setRestaurantHandler}/>
                <FieldForm label="IBAN" type="text" placeholder="Iban" name="restIban" value={restaurant.restIban} onChange={setRestaurantHandler}/>
                <div className="w-full mb-2">
                    <label>Specialité</label>
                    <select name="fsSpecialiteByRestIdSpe" onChange={setRestaurantHandler}>
                        {specialite.map((res,index)=>(
                            <option key={index} value={index}>{res.speType}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-evenly">
                    <button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</button>
                    <Input type="submit" className="btnUpdate" value="Finir inscription"/>
                </div>
            </div>

        </form>
    );

};

export default FormRestaurantSignUp;