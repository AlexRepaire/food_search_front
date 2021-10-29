import React from 'react';

const TableauListCommandes = ({showCommandeView, commandesListFilter, handleStatutFilter}) => {



    return (
        <div className="flex flex-col p-20">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <nav className="md:mr-auto md:ml-4 md:py-5 flex flex-wrap items-center">
                        <button className="mx-5 hover:text-gray-900" value="tout" onClick={handleStatutFilter}>Tout</button>
                        <div>|</div>
                        <button className="mx-5 hover:text-blue-900" value="non traité" onClick={handleStatutFilter}>Non traité</button>
                        <div>|</div>
                        <button className="mx-5 hover:text-gray-900" value="en cours" onClick={handleStatutFilter}>En cours</button>
                        <div>|</div>
                        <button className="mx-5 hover:text-gray-900" value="terminé" onClick={handleStatutFilter}>Terminé</button>
                    </nav>
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
                                    Numéro client
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
                            {commandesListFilter.map((res,index) => {

                                const colorStatut = res.cmdStatus === 'non traité' ? 'bg-red-100' : res.cmdStatus === 'en cours' ? 'bg-yellow-100' : res.cmdStatus === 'terminé' ? 'bg-green-100' : '';

                                return <tr>
                                    <td className="border px-6 py-4 whitespace-nowrap ">
                                        <div className="text-sm text-gray-500 text-center">
                                            {res.cmdId}
                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 text-center">
                                            {res.cmdIdUti}
                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 text-center">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorStatut} text-green-800`}>
                                                {res.cmdStatus}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 text-center">

                                            <button className="btnPrimary m-2" value={res.cmdId} onClick={showCommandeView}>
                                                {res.cmdStatus === "non traité" ? "Préparer la commande" : "Voir commande"}
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableauListCommandes;
