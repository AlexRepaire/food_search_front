import React from 'react';


const TableauListMenus = () => {

    // const menu = [
    //     {photo: '/images/plat1.jpg', nom: 'plat 1', description: 'plat gastronomique 1', prix: '15€'},
    //     {photo: '/images/plat2.jpg', nom: 'plat 2', description: 'plat gastronomique 2', prix: '25€'},
    //     {photo: '/images/plat3.jpg', nom: 'plat 3', description: 'plat gastronomique 3', prix: '35€'},
    //     {photo: '/images/plat4.jpg', nom: 'plat 4', description: 'plat gastronomique 4', prix: '45€'},
    // ]

    return (
        <div className="flex flex-col p-20">
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
                                    Prix
                                </th>
                                <th scope="col"
                                    className="border text-center px-6 py-4  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
                            <tr>

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
                                        Nom du plats
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        Plat gastronomique
                                    </div>
                                </td>
                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        60€
                                    </div>
                                </td>

                                <td className="border px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        <button className="btnPrimary m-2">Modifier</button>
                                        <button className="btnDanger m-2 ">Supprimer</button>

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

export default TableauListMenus;
