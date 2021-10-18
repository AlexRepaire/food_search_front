import React from 'react';

const TableauListPlats = ({plats,handlePlatsFilter, supprimerPlat, viewFormUpdate}) => {


    return (
        <div className="flex flex-col p-20">
            <nav className="md:mr-auto md:ml-4 md:py-5 flex flex-wrap items-center">
                <button className="mx-5 hover:text-gray-900" value="tout" onClick={handlePlatsFilter}>Tout</button>
                <div>|</div>
                <button className="mx-5 hover:text-blue-900" value="entrée" onClick={handlePlatsFilter}>Entrées</button>
                <div>|</div>
                <button className="mx-5 hover:text-gray-900" value="plat" onClick={handlePlatsFilter}>Plats</button>
                <div>|</div>
                <button className="mx-5 hover:text-gray-900" value="dessert" onClick={handlePlatsFilter}>Desserts
                </button>
                <div>|</div>
                <button className="mx-5 hover:text-gray-900" value="boisson" onClick={handlePlatsFilter}>Boissons
                </button>
            </nav>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className=" table-auto border min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50 ">
                            <tr>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Photo
                                </th>
                                <th
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nom
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Catégories
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prix
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                            {plats.map((res,index)=>(
                                <tr key={index}>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    <img className="h-10 w-10 rounded-full"
                                                         src='/images/plat1.jpg'
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {res.prTitre}
                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {res.prDescription}

                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {res.fsCategPlatsByPrIdCat.cpType}

                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {res.prPrix} €
                                        </div>
                                    </td>
                                    <td className="border px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            <button className="btnUpdate m-2" value={res.prId} onClick={viewFormUpdate}>Modifier</button>
                                            <button className="btnDanger m-2" value={res.prId} onClick={supprimerPlat}>Supprimer</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableauListPlats;
