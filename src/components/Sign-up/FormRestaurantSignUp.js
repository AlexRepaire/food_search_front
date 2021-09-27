import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import {Restaurant} from "../../models/restaurant";
import FieldForm from "../../UI/FieldForm";

const FormRestaurantSignUp = ({modifyIndex,value,setRestaurantHandler,inscriptionRestaurant}) => {
    const [nom, setNom] = useState();
    const [tel, setTel] = useState();
    const [specialite, setSpecialite] = useState();

    const restaurant = new Restaurant(null, nom, tel, null, null, null, null, specialite);

    useEffect(()=>{
        setNom(value.restNom);
        setTel(value.restTel);
        setSpecialite(value.fsSpecialiteByRestIdSpe);
    },[]);

    const nomHandler = e => {
        setNom(e.target.value);
    };

    const telHandler = e => {
        setTel(e.target.value);
    };

    const specialiteHandler = e => {
        setSpecialite(e.target.value);
    } ;

    const nextStep = e => {
        e.preventDefault();
        const inscription = inscriptionRestaurant;
        //inscription();
    };

    const prevStep = e => {
        setRestaurantHandler(restaurant);
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
                <FieldForm label="Nom" type="text" placeholder="Nom" value={nom} onChange={nomHandler}/>
                <FieldForm label="Téléphone" type="number" placeholder="Téléphone" value={tel} onChange={telHandler}/>
                <FieldForm label="Specialité" type="text" placeholder="Specialité" value={specialite} onChange={specialiteHandler}/>

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