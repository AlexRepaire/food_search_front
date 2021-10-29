import React from 'react';
import {Link} from "react-router-dom";
import favorisService from "../../../services/favorisService";

const ListFavoris = ({datasFav}) => {

    const supFav = async (e) => {
        const restId = e.target.value
        await favorisService.remove(restId);

    }

    return (
        <div className="w-6/12">
            <h5 className="flex justify-center text-3xl font-normal leading-normal mt-0 mb-2 text-black">Favoris</h5>

            <div className="flex items-center justify-center h-auto p-5">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="bg-white  rounded-lg w-2/3 h-96 overflow-y-auto">
                            <ul className="divide-y divide-gray-300 ">
                                {datasFav.map((res,index)=>(
                                    <div className="flex">
                                        <div className="w-3/4">
                                            <Link to={`/restaurant/${res.restId}`} >
                                                <li key={index} className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
                                                    <p>{res.restNom}</p>
                                                </li>
                                            </Link>
                                        </div>
                                        <div className="flex justify-center w-1/4">
                                            <button className="btnDanger" type="button" value={res.restId} onClick={supFav}>X</button>
                                        </div>
                                    </div>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListFavoris;