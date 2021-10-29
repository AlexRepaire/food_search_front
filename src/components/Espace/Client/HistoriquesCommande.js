import React, {useContext, useEffect, useState} from 'react';
import commandeService from "../../../services/commandeService";
import AuthContext from "../../../store/auth-context";
import {Link} from "react-router-dom";

const HistoriquesCommande = ({showFormEvaluation}) => {

    const {user} = useContext(AuthContext);
    const [commandeList, setCommandeList] = useState([]);


    const recupDonneeUti = async() => {
        const utilisateur = new Object(JSON.parse(user));
        const response = await commandeService.getListByUti(parseInt(utilisateur.id));
        const dataCommande = await response.data;
        await setCommandeList(dataCommande);
        console.log(dataCommande)
    }

    const recupCommande = (e) => {
        const id = e.target.value;
        const data =  commandeList.find(item => item.cmdId === parseInt(id));
        showFormEvaluation(data);
    };


    useEffect(()=>{
        recupDonneeUti();
    },[])
    return (

        <div className="flex flex-col text-left pt-8 ">
            <h5 className="flex justify-center text-3xl font-normal leading-normal mt-0 mb-2 font-bold">Historiques des commandes</h5>

            <div className="flex items-center justify-center h-auto p-5">
                <div className="container">
                    <div className="overflow-y-scroll h-72 flex justify-center shadow border-b border-gray-200 sm:rounded-lg ">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll w-full">

                            {
                                commandeList.map((res) =>{
                                    //const dataDetailsCmd = res.fsCommandeDetailsByCmdId;
                                    return(

                                        <tr className="flex w-full mb-4">
                                            <td className="px-6 py-4 whitespace-nowrap w-3/12 ">
                                                <div className="flex items-center">
                                                    <div className="ml-12">
                                                        <Link to={`/restaurant/${res.fsRestaurantByCmdIdRes.restId}`}>
                                                            <div className="text-sm font-medium text-blue-700">
                                                                {res.fsRestaurantByCmdIdRes.restNom}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            {
                                                res.fsCommandeDetailsByCmdId.map((resp)=>{
                                                    return(
                                                        <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2 overflow-auto h-16 ">
                                                            <p>{resp.cmdDetailsNom} {resp.cmdDetailsPrix}</p>
                                                            <p>{resp.cmdDetailsNom} {resp.cmdDetailsPrix}</p>
                                                            <p>{resp.cmdDetailsNom} {resp.cmdDetailsPrix}</p>
                                                        </td>
                                                    )

                                                })
                                            }
                                            <td>
                                                {!res.fsEvaluationByCmdIdEva && <button className="btnPrimary" value={res.cmdId}
                                                         onClick={recupCommande}>Evaluation</button>}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoriquesCommande;