import React from 'react';
import imageTest from '../../assets/restaurant.png';
import {Link} from "react-router-dom";

const ListRestaurant = () => {

    const image = imageTest;

    return (
        <div className="w-6/12">
            <div className="border-b-2">
                <div className="max-w-md bg-white my-16 rounded-xl hover:shadow-md overflow-hidden md:max-w-2xl">
                    <Link to="/restaurant/5">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src={image}/>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 ">Pizzeria</p>
                                <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                                <p className="text-gray-600">59600 Maubeuge</p>
                                <p className="text-gray-600">Prix moyens: 30€</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="border-b-2">
                <div className="max-w-md bg-white my-16 rounded-xl hover:shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={image}/>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-600 ">Pizzeria</p>
                            <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                            <p className="text-gray-600">59600 Maubeuge</p>
                            <p className="text-gray-600">Prix moyens: 30€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2">
                <div className="max-w-md bg-white my-16 rounded-xl hover:shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={image}/>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-600 ">Pizzeria</p>
                            <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                            <p className="text-gray-600">59600 Maubeuge</p>
                            <p className="text-gray-600">Prix moyens: 30€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListRestaurant;