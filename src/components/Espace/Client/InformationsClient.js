import React, {useContext, useEffect, useState} from 'react';
import imageTest from "../../../assets/client.jpg";
import utilisateurService from "../../../services/utilisateurService";


const InformationsClient = ({userDatas,toggleShowModalUpdateUser}) => {

    const image = `bg-${imageTest}`;

    const deleteAccount = async () =>{
        await utilisateurService.remove(userDatas.utiId);
    }

    const  recupUti = async (e) => {
        const id = e.target.value;
        const dataUti = await utilisateurService.get(id);
        //showFormInformationClient(dataUti);
    }

    return (

            <div className="w-6/12">
                <h5 className="flex justify-center text-3xl font-normal leading-normal mt-0 mb-12">Information personnelle</h5>

                <div className="flex divide-gray-50">
                    <div className="w-6/12 flex justify-center items-center h-96 px-16">
                        <img className="h-64 w-64 rounded-full" src={imageTest}/>
                    </div>

                    <div className="space-y-6 w-6/12">
                        <p>Nom : {userDatas.utiNom}</p>
                        <p>Prénom : {userDatas.utiPrenom}</p>
                        <p>Date de naissance : {userDatas.utiDdn}</p>
                        <p>Adresse mail : {userDatas.utiMail}</p>
                        <p>point de fidélité : {userDatas.fsFidelitesByUtiId.fidPtsFid}</p>
                        <p>Numéro de téléphone : {userDatas.utiTel}</p>

                    </div>
                </div>
                <div className="flex">
                    <button
                        className="btnDanger my-4 mx-16"
                        type="button"
                        onClick={deleteAccount}>
                        Supprimer mon compte
                    </button>
                    <button
                        className="btnPrimary my-4 mx-16"
                        type="button"
                        onClick={toggleShowModalUpdateUser}>
                        Modifier mes informations
                    </button>
                </div>
            </div>

    );
};

export default InformationsClient;