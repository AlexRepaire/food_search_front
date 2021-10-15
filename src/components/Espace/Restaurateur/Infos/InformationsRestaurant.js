import React from 'react';

const InformationsRestaurant = ({dataRestaurant}) => {

        return (
            <div className="w-6/12 ">
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
                <h1 className="my-4">Informations Gérant</h1>

                <ul>
                    <li >Nom du gérant : {dataRestaurant.fsUtilisateurByRestIdUti.utiNom} {dataRestaurant.fsUtilisateurByRestIdUti.utiPrenom}</li>
                    <li>mail : {dataRestaurant.fsUtilisateurByRestIdUti.utiMail}</li>
                    <li>Nuémro de telephone: {dataRestaurant.fsUtilisateurByRestIdUti.utiTel}</li>
                </ul>
            </div>
        );
};

export default InformationsRestaurant;
