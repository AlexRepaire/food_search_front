import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import {Adresse} from "../../models/adresse";

const FormAdresseUtilisateurSignUp = (props) => {

    const [numRue, setNumRue] = useState();
    const [rue, setRue] = useState();
    const [compAdresse, setCompAdresse] = useState();
    const [codePostal, setCodePostal] = useState();
    const [ville, setVille] = useState();
    const [pays, setPays] = useState();

    const adresse = new Adresse(null,numRue,rue,compAdresse,codePostal,ville,pays);

    useEffect(()=>{
        setNumRue(props.value.adrNumero);
        setRue(props.value.adrRue);
        setCompAdresse(props.value.adrCplAdr);
        setCodePostal(props.value.adrCp);
        setVille(props.value.adrVille);
        setPays(props.value.adrVille);
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
        props.setAdresseRestaurantHandler(adresse);
        props.modifyIndex(5);
    };

    const prevStep = e => {
        props.setAdresseRestaurantHandler(adresse);
        props.modifyIndex(3);
    };

    return (
        <form onSubmit={nextStep} className="mt-60">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir l'adresse du restaurant</h2>
            <div className="px-12 pb-10">
                <div className="w-full mb-2">
                    <label htmlFor="">Numéro rue</label>
                    <Input type="number" placeholder="Numéro rue" value={numRue} onChange={numRueHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Rue</label>
                    <Input  type="text" placeholder="rue" value={rue} onChange={rueHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Complément d'adresse</label>
                    <Input type="text" placeholder="complément d'adresse" value={compAdresse} onChange={compRueHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Code postal</label>
                    <Input type="number" placeholder="code postal" value={codePostal} onChange={codePostalHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Ville</label>
                    <Input type="text" placeholder="Ville" value={ville} onChange={villeHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Pays</label>
                    <Input type="text" placeholder="Pays" value={pays} onChange={paysHandler}/>
                </div>
                <div className="flex items-center justify-evenly">
                    <Button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</Button>
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