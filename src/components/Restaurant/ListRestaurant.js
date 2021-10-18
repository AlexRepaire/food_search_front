import React from 'react';
import imageTest from '../../assets/restaurant.png';
import {Link} from "react-router-dom";

const ListRestaurant = ({listRestaurant}) => {

    const image = imageTest;

    return (
        <div className="w-6/12">
            {listRestaurant.map((response,index)=>(
                <div key={index} className="border-b-2">
                    <div className="max-w-md bg-white my-16 rounded-xl hover:shadow-md overflow-hidden md:max-w-2xl">
                        <Link to={`/restaurant/${response.restId}`+response.restId}>
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-48 w-full object-cover md:w-48" src={image}/>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-600 ">{response.fsSpecialiteByRestIdSpe.speType}</p>
                                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">{response.restNom}</h2>
                                    <p className="text-gray-600">{response.fsAdresseByRestId.adrVille}</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            ))}
        </div>

    );
};

export default ListRestaurant;