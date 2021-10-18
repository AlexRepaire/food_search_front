import React, {useEffect, useState} from 'react';
import FieldForm from "../../../../UI/FieldForm";
import {useParams, useHistory } from "react-router-dom";
import messageService from "../../../../services/messageService";

const FormMessageResponse = () => {
    const {id} = useParams();
    let history = useHistory();
    const [dataMsg, setDataMsg] = useState({
        msgMessage:'',
        fsUtilisateurByMsgIdUti:{
            utiNom:''
        },
        msgDate:''
    });

    const recupData = async () =>{
       const response = await messageService.get(id);
       const data = await response.data;
       setDataMsg(data);
    }

    /**
     * envoi automatique de MAIL à prévoir.
     */

    const prevNavigation = () => {
        history.push("/espaceAdmin");
    }

    useEffect(() =>{
        recupData();
    }, [])

    return (
        <div>
            <div className="p-4">
                <button
                    className="flex text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-auto mb-1 ease-linear transition-all duration-150"
                    type="button"
                onClick={prevNavigation}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clip-rule="evenodd"/>
                    </svg>Retour
                </button>
            </div>
            <div className="p-8">
                <p>{dataMsg.fsUtilisateurByMsgIdUti.utiNom}</p>
                <p>{dataMsg.msgDate}</p>
            </div>
            <div className="p-8 border rounded">
                <h2 className="font-bold">Message de l'utilisateur: </h2>
                <p>{dataMsg.msgMessage}</p>
            </div>
            <div >
                <form className="shadow-none bg-white">
                    <FieldForm label="Réponse" placeholder="réponse à l'utilisateur" type="text" />
                    <button className="btnUpdate ">Envoyer {id}</button>
                </form>
            </div>

        </div>
    );
};

export default FormMessageResponse;