import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import {Adresse} from "../../models/adresse";
import FieldForm from "../../UI/FieldForm";

const FormAdresseUtilisateurSignUp = ({modifyIndex, value, setAdresseRestaurantHandler}) => {
    const [numRue, setNumRue] = useState();
    const [rue, setRue] = useState();
    const [compAdresse, setCompAdresse] = useState();
    const [codePostal, setCodePostal] = useState();
    const [ville, setVille] = useState();
    const [pays, setPays] = useState();

    const adresse = new Adresse(null,numRue,rue,compAdresse,codePostal,ville,pays);

    useEffect(()=>{
        setNumRue(value.adrNumero);
        setRue(value.adrRue);
        setCompAdresse(value.adrCplAdr);
        setCodePostal(value.adrCp);
        setVille(value.adrVille);
        setPays(value.adrVille);
    },[])

    const numRueHandler = e => {
        setNumRue(e.target.value);
    };

    const rueHandler = e => {
        setRue(e.target.value);
    };

    const compRueHandler = e => {
        setCompAdresse(e.target.value);
    };

    const codePostalHandler = e => {
        setCodePostal(e.target.value);
    };

    const villeHandler = e => {
        setVille(e.target.value);
    };

    const paysHandler = e => {
        setPays(e.target.value);
    };

    const nextStep = e => {
        e.preventDefault();
        setAdresseRestaurantHandler(adresse);
        modifyIndex(5);
    };

    const prevStep = e => {
        setAdresseRestaurantHandler(adresse);
        modifyIndex(3);
    };

    return (
        <form onSubmit={nextStep} className="mt-60">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir l'adresse du restaurant</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Numéro rue" type="number" placeholder="Numéro rue" value={numRue} onChange={numRueHandler}/>
                <FieldForm label="Rue" type="text" placeholder="rue" value={rue} onChange={rueHandler}/>
                <FieldForm label="Complément d'adresse" type="text" placeholder="Complément d'adresse" value={compAdresse} onChange={compRueHandler}/>
                <FieldForm label="Code postal" type="number" placeholder="Code postal" value={codePostal} onChange={codePostalHandler}/>
                <FieldForm label="Ville" type="text" placeholder="Ville" value={ville} onChange={villeHandler}/>
                <FieldForm label="Pays" type="text" placeholder="Pays" value={pays} onChange={paysHandler}/>

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