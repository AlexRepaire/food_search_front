import React, {useEffect, useState} from 'react';
import utilisateurService from "../../../../services/utilisateurService";
import commandeService from "../../../../services/commandeService";

const InformationsCommande = ({toggleHandlerCommandeView, commandeSelected}) => {

    const [total, setTotal] = useState(0);
    const [user, setUser] = useState({});

    const calculTotal = () => {
        let totalData = 0;
        commandeSelected.fsCommandeDetailsByCmdId.map(res=>{
            const totalRes = res.cmdDetailsPrix * res.cmdDetailsQuantite;
            totalData = totalData + totalRes;
        })
        setTotal(totalData)
        console.log(commandeSelected)
    };

    const recupDataUser = async () => {
        const res = await utilisateurService.get(commandeSelected.cmdIdUti);
        const data = res.data;
        await setUser(data);
    };

    const commandeTerminate = async () => {
        const data = commandeSelected;
        data.cmdStatus = "terminé";
        await commandeService.update(data);
    };

    useEffect(()=> {
        calculTotal();
        recupDataUser();
    },[commandeSelected])

    return (
        <div className="mx-20">
            <div className="p-4">
                <button
                    className="flex text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-auto mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleHandlerCommandeView}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                              clip-rule="evenodd"/>
                    </svg>Retour
                </button>
            </div>
            <div className="my-8">
                <ul>
                    <li>Numéro de commande: {commandeSelected.cmdId}</li>
                    <li>nom client: {user.utiNom} {user.utiPrenom}</li>
                    <li>numero de téléphone: {user.utiTel}</li>
                    <li>mail: {user.utiMail}</li>
                </ul>
            </div>
            <div className="my-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className=" table-auto border min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-gray-50 ">
                            <tr>
                                <th
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nom
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantité
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prix Unitaire
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                        {commandeSelected.fsCommandeDetailsByCmdId.map((res,index)=>{
                            return <tr>
                                <td className="border px-6 py-4 whitespace-nowrap ">
                                    <div className="text-sm text-gray-500 text-center">
                                        {res.cmdDetailsNom}
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap ">
                                    <div className="text-sm text-gray-500 text-center">
                                        {res.cmdDetailsQuantite}
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap ">
                                    <div className="text-sm text-gray-500 text-center">
                                        {res.cmdDetailsPrix}
                                    </div>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                <p>Total net TTC = {total} €</p>

            </div>
            <button className='btnPrimary mb-4' onClick={commandeTerminate}>Commande terminé</button>
        </div>
    );
};

export default InformationsCommande;
