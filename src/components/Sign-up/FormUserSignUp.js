import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import {Utilisateur} from "../../models/utilisateur";

const FormUserSignUp = (props) => {
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [tel, setTel] = useState();
    const [pseudo, setPseudo] = useState();
    const [mail, setMail] = useState();
    const [mdp, setMdp] = useState();
    const [ddn, setDdn] = useState(); //date de naissance

    const utilisateur = new Utilisateur(null, nom, prenom, tel, pseudo, mail, mdp, ddn);

    useEffect(()=>{
        setNom(props.value.utiNom);
        setPrenom(props.value.utiPrenom);
        setTel(props.value.utiTel);
        setPseudo(props.value.utiPseudo);
        setMail(props.value.utiMail);
        setMdp(props.value.utiMdp);
        setDdn(props.value.utiDdn);
        console.log(props.role)
    },[])

    const nomHandler = e => {
        setNom(e.target.value);
    };

    const prenomHandler = e => {
        setPrenom(e.target.value);
    };

    const telHandler = e => {
        setTel(e.target.value);
    };

    const pseudoHandle = e => {
        setPseudo(e.target.value);
    };

    const mailHandler = e => {
        setMail(e.target.value);
    };

    const mdpHandler = e => {
        setMdp(e.target.value);
    };

    const ddnHandler = e => {
        setDdn(e.target.value);
    };

    const viewInput = props.role === "restaurant"
        ? <Input type="submit" className="btnPrimary" value="suivant"/>
        : <Input type="submit" className="btnUpdate" value="Finir inscription"/>;

    const nextStep = e => {
        e.preventDefault();
        props.setUtilisateurHandler(utilisateur);
        if (props.role === "restaurant") {
            props.modifyIndex(4);
        } else {
            const inscription = props.inscriptionUtilisateur;
            inscription();
        }
    };

    const prevStep = e => {
        props.setUtilisateurHandler(utilisateur);
        props.modifyIndex(2);
    };

    return (
        <form onSubmit={nextStep} className="mt-60">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir vos informations</h2>
            <div className="px-12 pb-10">
                <div className="w-full mb-2">
                    <label htmlFor="">Nom</label>
                    <Input type="text" placeholder="Nom" value={nom} onChange={nomHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Prénom</label>
                    <Input  type="text" placeholder="Prénom" value={prenom} onChange={prenomHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Téléphone</label>
                    <Input type="number" placeholder="Téléphone" value={tel} onChange={telHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Pseudo</label>
                    <Input type="text" placeholder="Pseudo" value={pseudo} onChange={pseudoHandle}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Mail</label>
                    <Input type="mail" placeholder="Mail" value={mail} onChange={mailHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Mot de passe</label>
                    <Input type="password" placeholder="Mot de passe" value={mdp} onChange={mdpHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Date de naissance</label>
                    <Input type="date" placeholder="Date de naissance" value={ddn} onChange={ddnHandler}/>
                </div>
                <div className="flex items-center justify-evenly">
                    <Button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</Button>
                    {viewInput}
                </div>
            </div>

        </form>
    );
};

export default FormUserSignUp;

