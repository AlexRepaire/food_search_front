import React from 'react';
import Input from "../../UI/Input";
import FieldForm from "../../UI/FieldForm";

const FormUserSignUp = ({modifyIndex, utilisateur, role, inscriptionUtilisateur, setUtilisateurHandler}) => {

    const viewInput = role === "restaurant"
        ? <Input type="submit" className="btnPrimary" value="suivant"/>
        : <Input type="submit" className="btnUpdate" value="Finir inscription"/>;

    const nextStep = e => {
        e.preventDefault();

        if (role === "restaurant") {
            modifyIndex(4);
        } else {
            inscriptionUtilisateur();
        }

    };

    const prevStep = e => {
        modifyIndex(2);
    };

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir vos informations</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Nom *" type="text" placeholder="Nom" name="utiNom" value={utilisateur.utiNom} onChange={setUtilisateurHandler} />
                <FieldForm label="Prénom" type="text" placeholder="Prénom" name="utiPrenom" value={utilisateur.utiPrenom} onChange={setUtilisateurHandler}/>
                <FieldForm label="Pseudo" type="text" placeholder="Pseudo" name="utiPseudo" value={utilisateur.utiPseudo} onChange={setUtilisateurHandler}/>
                <FieldForm label="Date de naissance" type="date" placeholder="Date de naissance" name="utiDdn" value={utilisateur.utiDdn} onChange={setUtilisateurHandler}/>
                <FieldForm label="Téléphone" type="number" placeholder="Téléphone" name="utiTel" value={utilisateur.utiTel} onChange={setUtilisateurHandler}/>
                <FieldForm label="Mail" type="mail" placeholder="Mail" name="utiMail" value={utilisateur.utiMail} onChange={setUtilisateurHandler}/>
                <FieldForm label="Mot de passe" type="password" name="utiMdp" placeholder="Mot de passe" value={utilisateur.utiMdp} onChange={setUtilisateurHandler}/>

                <div className="flex items-center justify-evenly">
                    <button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</button>
                    {viewInput}
                </div>
            </div>

        </form>
    );
};

export default FormUserSignUp;

