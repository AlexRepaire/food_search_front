import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import restaurantService from "../../../../services/restaurantService";

const ListRestaurant = () => {
    const [datas , setDatas] = useState([]);


    const listResto = async () => {
        const response = await restaurantService.getAll();
        const data =  await response.data;
        setDatas(data);
        console.log(data);

    }

    useEffect(()=>{
        listResto();
    },[])

    const listRes = datas.map((res,index) => (
        <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {res.restNom}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/espaceAdmin/ListeCommentairesParRestaurant/${res.restId}`} className="text-indigo-600 hover:text-indigo-900">Voir liste commentaire</Link>
            </td>
        </tr>
    ))

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
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Détails
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {listRes}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListRestaurant;