import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import {Adresse} from "../../models/adresse";
import FieldForm from "../../UI/FieldForm";

const FormAdresseUtilisateurSignUp = ({modifyIndex, adresseRestaurant, setAdresseRestaurantHandler}) => {

    const nextStep = e => {
        e.preventDefault();
        modifyIndex(5);
    };

    const prevStep = e => {
        modifyIndex(3);
    };

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir l'adresse du restaurant</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Numéro rue" type="number" placeholder="Numéro rue" name="adrNumero" value={adresseRestaurant.adrNumero} onChange={setAdresseRestaurantHandler}/>
                <FieldForm label="Rue" type="text" placeholder="rue" name="adrRue" value={adresseRestaurant.adrRue} onChange={setAdresseRestaurantHandler}/>
                <FieldForm label="Complément d'adresse" type="text" placeholder="Complément d'adresse" name="adrCplAdr" value={adresseRestaurant.adrCplAdr} onChange={setAdresseRestaurantHandler}/>
                <FieldForm label="Code postal" type="number" placeholder="Code postal" name="adrCp" value={adresseRestaurant.adrCp} onChange={setAdresseRestaurantHandler}/>
                <FieldForm label="Ville" type="text" placeholder="Ville" name="adrVille" value={adresseRestaurant.adrVille} onChange={setAdresseRestaurantHandler}/>
                <FieldForm label="Pays" type="text" placeholder="Pays" name="adrPays" value={adresseRestaurant.adrPays} onChange={setAdresseRestaurantHandler}/>

                <div className="flex items-center justify-evenly">
                    <button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</button>
                    <Input
                        type="submit"
                        className="btnPrimary"
                        value="suivant"/>
                </div>
            </div>
        </form>
    );
};

export default FormAdresseUtilisateurSignUp;