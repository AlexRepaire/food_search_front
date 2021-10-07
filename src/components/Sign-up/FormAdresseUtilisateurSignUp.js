import React from 'react';
import Input from "../../UI/Input";
import FieldForm from "../../UI/FieldForm";

const FormAdresseUtilisateurSignUp = ({modifyIndex, role, setAdresseHandler, adresse}) => {

    const nextStep = e => {
      e.preventDefault();
      modifyIndex(3);
    };

    const prevStep = e => {
        modifyIndex(1);
    };

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir l'adresse du {role === "client" ? "client" : "gérant"}</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Numéro rue" type="number" placeholder="Numéro rue" name="adrNumero" value={adresse.adrNumero} onChange={setAdresseHandler}/>
                <FieldForm label="Rue" type="text" placeholder="rue" name="adrRue" value={adresse.adrRue} onChange={setAdresseHandler}/>
                <FieldForm label="Complément d'adresse" type="text" name="adrCplAdr" placeholder="Complément d'adresse" value={adresse.adrCplAdr} onChange={setAdresseHandler}/>
                <FieldForm label="Code postal" type="number" placeholder="Code postal" name="adrCp" value={adresse.adrCp} onChange={setAdresseHandler}/>
                <FieldForm label="Ville" type="text" placeholder="Ville" name="adrVille" value={adresse.adrVille} onChange={setAdresseHandler}/>
                <FieldForm label="Pays" type="text" placeholder="Pays" name="adrPays" value={adresse.adrPays} onChange={setAdresseHandler}/>
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