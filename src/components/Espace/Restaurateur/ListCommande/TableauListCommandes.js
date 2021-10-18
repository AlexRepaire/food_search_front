import React from 'react';
import {Link} from "react-router-dom";

const TableauListCommandes = ({toggleHandlerCommandeView}) => {


    return (
        <div className="flex flex-col p-20">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className=" table-auto border min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50 ">
                            <tr>
                                <th
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    n° Commande
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nom client
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Statut
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                            <tr>

                                <td className="border px-6 py-4 whitespace-nowrap ">
                                    <div className="text-sm text-gray-500 text-center">
                                        1156487
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 text-center">
                                        Food Search
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 text-center">
                                        <ul>
                                            <li>
                                                <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                                                  non traitée
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                                                  en cours
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                  terminée
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>

                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 text-center">

                                            <button className="btnPrimary m-2" onClick={toggleHandlerCommandeView}>
                                                Voir commande
                                            </button>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableauListCommandes;
