import React from 'react';
import Input from "../../UI/Input";
import FieldForm from "../../UI/FieldForm";

const FormRestaurantSignUp = ({modifyIndex,restaurant,setRestaurantHandler,inscriptionRestaurant}) => {

    const nextStep = e => {
        e.preventDefault();
        inscriptionRestaurant();
    };

    const prevStep = e => {
        modifyIndex(4);
    };

    //données de test
    const dataSpecialite = [
        {id:1, type: "Pizzeria"},
        {id:2, type: "Indien"},
        {id:3, type: "Chinois"},
        {id:4, type: "Japonais"},
        {id:5, type: "Italiens"},
    ];

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir les informations du restaurant</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Nom" type="text" placeholder="Nom" name="restNom" value={restaurant.restNom} onChange={setRestaurantHandler}/>
                <FieldForm label="Téléphone" type="number" placeholder="Téléphone" name="restTel" value={restaurant.restTel} onChange={setRestaurantHandler}/>
                <FieldForm label="Specialité" type="text" placeholder="Specialité" name="fsSpecialiteByRestIdSpe" value={restaurant.fsSpecialiteByRestIdSpe} onChange={setRestaurantHandler}/>

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