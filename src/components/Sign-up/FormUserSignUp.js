import React, {useEffect, useState} from 'react';
import Input from "../../UI/Input";
import FieldForm from "../../UI/FieldForm";

const FormUserSignUp = ({modifyIndex, value, role, inscriptionUtilisateur, setUtilisateurHandler}) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [mail, setMail] = useState("");
    const [mdp, setMdp] = useState("");
    const [mdp2, setMdp2] = useState("");
    const [ddn, setDdn] = useState(new Date()); //date de naissance

    const [error, setError] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState("true");

    const user = {
        utiMail: mail,
        utiMdp: mdp,
        utiDdn: ddn,
        utiNom: nom,
        utiPrenom: prenom,
        utiTel: tel,
        utiPseudo: pseudo,
        fsAdresseByUtiId: null,
        fsRoleByUtiIdRol: null
    }

    useEffect(()=>{
        setNom(value.utiNom);
        setPrenom(value.utiPrenom);
        setTel(value.utiTel);
        setPseudo(value.utiPseudo);
        setMail(value.utiMail);
        setMdp(value.utiMdp);
        setDdn(value.utiDdn);
    },[]);

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

    const mdpHandler2 = e => {
        setMdp2(e.target.value);
    };

    const ddnHandler = e => {
        setDdn(e.target.value);
    };

    const isValidHandler = () => {
        if (mdp === mdp2 ) {
            setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        }
    };


    const viewInput = role === "restaurant"
        ? <Input type="submit" className="btnPrimary" value="suivant"/>
        : <Input type="submit" className="btnUpdate" value="Finir inscription"/>;

    const nextStep = e => {
        e.preventDefault();
        //isValidHandler();
/*
        if (nom.trim().length === 0){
            setError(true);
            return
        } else {
            setError(false);
        }
*/
        setUtilisateurHandler(user);

        if (passwordIsValid){
            if (role === "restaurant") {
                modifyIndex(4);
            } else {
                inscriptionUtilisateur();
                //inscription();
            }
        } else {
            return alert("mdp incorrect");
        }

    };

    const prevStep = e => {
        setUtilisateurHandler(user);
        modifyIndex(2);
    };

    return (
        <form onSubmit={nextStep} className="mt-60 flex flex-col justify-center w-4/12">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir vos informations</h2>
            <div className="px-12 pb-10">
                <FieldForm label="Nom *" type="text" placeholder="Nom" value={nom} onChange={nomHandler} error={error} />
                <FieldForm label="Prénom" type="text" placeholder="Prénom" value={prenom} onChange={prenomHandler}/>
                <FieldForm label="Pseudo" type="text" placeholder="Pseudo" value={pseudo} onChange={pseudoHandle}/>
                <FieldForm label="Date de naissance" type="date" placeholder="Date de naissance" value={ddn} onChange={ddnHandler}/>
                <FieldForm label="Téléphone" type="number" placeholder="Téléphone" value={tel} onChange={telHandler}/>
                <FieldForm label="Mail" type="mail" placeholder="Mail" value={mail} onChange={mailHandler}/>
                <FieldForm label="Mot de passe" type="password" placeholder="Mot de passe" value={mdp} onChange={mdpHandler}/>
                <FieldForm label="Mot de passe" type="password" placeholder="Mot de passe" onChange={mdpHandler2}/>

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

