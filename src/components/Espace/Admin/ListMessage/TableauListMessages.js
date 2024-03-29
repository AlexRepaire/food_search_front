import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import messageService from "../../../../services/messageService";

const TableauListMessages = () => {
    const [dataMsg, setDataMsg] = useState([]);

    const recupData = async()=>{
        const response = await messageService.getAll();
        const datas = await response.data;
        setDataMsg(datas);
    }

    useEffect(()=>{
        recupData();
    }, [])

    return (
        <div className="flex flex-col p-20">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Infos
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Dates
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Messages
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Détails
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {
                                dataMsg.map((res)=>{

                                    return(
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                <p>{res.fsUtilisateurByMsgIdUti.utiNom}</p>                                           </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        <p>{res.msgDate}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {res.msgMessage}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/espaceAdmin/message/${res.msgId}`} className="text-indigo-600 hover:text-indigo-900">Voir le message</Link>
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

export default TableauListMessages;