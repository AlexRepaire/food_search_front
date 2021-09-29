import React from 'react';

const HistoriquesCommande = () => {
    return (

        <div className="flex flex-col text-left pt-8 ">
            <h5 className="flex justify-center text-3xl font-normal leading-normal mt-0 mb-2 font-bold">Historiques des commandes</h5>

            <div className="flex items-center justify-center h-auto p-5">
                <div className="container">
                    <div className="overflow-y-scroll h-72 flex justify-center shadow border-b border-gray-200 sm:rounded-lg ">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll w-full">

                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12 ">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
                                </td>
                            </tr>

                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
                                </td>
                            </tr>

                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
                                </td>
                            </tr>

                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
                                </td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
                                </td>
                            </tr>
                            <tr className="flex w-full mb-4">
                                <td className="px-6 py-4 whitespace-nowrap w-3/12">
                                    <div className="flex items-center">
                                        <div className="ml-12">
                                            <div className="text-sm font-medium text-blue-700">
                                                Nom du resto
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Date JJ/MM/AAAA
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Prix total: €€
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-9/12 border-l-2">
                                    <div className="text-sm text-gray-900">Récapitulatif de la commande</div>
                                    <div className="text-sm text-gray-500">...</div>
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

export default HistoriquesCommande;