import React, {useState} from 'react';

const InformationsRestaurant = ({dataRestaurant , horaires, toggleShowModal, deleteHoraire, toggleShowModalUpdate, viewFormUpdate}) => {

        return (
            <div className="md:w-6/12 ">
                <div>
                    <h1 className="mb-4">Informations restaurant</h1>
                    <ul>
                        <li >Nom du restaurant : {dataRestaurant.restNom}</li>
                        <li>Type de restaurant : {dataRestaurant.fsSpecialiteByRestIdSpe.speType}</li>
                        <li>Numéro de siret: {dataRestaurant.restSiret}</li>
                        <li>Iban : {dataRestaurant.restIban}</li>
                        <li>Adresse : {dataRestaurant.fsAdresseByRestId.adrNumero} - {dataRestaurant.fsAdresseByRestId.adrRue}</li>
                        <li>{dataRestaurant.fsAdresseByRestId.adrVille}</li>
                        <li>{dataRestaurant.fsAdresseByRestId.adrPays} - {dataRestaurant.fsAdresseByRestId.adrCp}</li>
                        <li>Numéro du téléphone : {dataRestaurant.restTel}</li>
                    </ul>
                </div>
                <div>
                    <h1 className="my-4">Informations Gérant</h1>
                    <ul>
                        <li>Nom du gérant : {dataRestaurant.fsUtilisateurByRestIdUti.utiNom} {dataRestaurant.fsUtilisateurByRestIdUti.utiPrenom}</li>
                        <li>mail : {dataRestaurant.fsUtilisateurByRestIdUti.utiMail}</li>
                        <li>Numéro de telephone: {dataRestaurant.fsUtilisateurByRestIdUti.utiTel}</li>
                    </ul>
                </div>
                <div className="my-4">
                    <h1>Horaires</h1>
                    <ul>
                        {horaires.map((res,index)=>(
                            <li className="my-4" key={index}>{res.jour} : {res.ouvert ?
                                <span>{res.ouvertureMatin} - {res.fermetureMatin} | {res.ouvertureApresMidi} - {res.fermetureApresMidi}</span> :
                                "fermé"}
                                <div>
                                    <button className="btnUpdate mr-4" value={res.id} onClick={viewFormUpdate}>Modifier</button>
                                    <button className="btnDanger" value={res.id} onClick={deleteHoraire}>Supprimer</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {horaires.length <= 6 ? <button className="btnPrimary" onClick={toggleShowModal}>Ajouter horaires</button> : null}
                </div>
            </div>
        );
};

export default InformationsRestaurant;
