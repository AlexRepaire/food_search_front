import React from 'react';

const CarteRestaurant = ({entreesFilter, platsFilter, dessertsFilter, boissonsFilter, addToPanier, user}) => {


    return (
        <div className="w-6/12">
            <div className="my-4">
                <h1>Les Entrées</h1>
                <ul>
                    {entreesFilter.map((res,index)=>(
                        <li key={index} className="flex">
                            <div className="w-9/12">
                                <p className="font-semibold">{res.prTitre}</p>
                                <p className="font-light">{res.prDescription}</p>
                            </div>
                            <p className="w-2/12">{res.prPrix} €</p>
                            {user && <button value={res.prId} onClick={addToPanier}
                                     className="w-1/12 text-white font-bold rounded bg-blue-600 hover:bg-blue-700">+</button>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-4">
                <h1>les Plats</h1>
                <ul>
                    {platsFilter.map((res,index)=>(
                        <li key={index} className="flex my-4">
                            <div className="w-9/12">
                                <p className="font-semibold">{res.prTitre}</p>
                                <p className="font-light">{res.prDescription}</p>
                            </div>
                            <p className="w-2/12">{res.prPrix} €</p>
                            {user && <button value={res.prId} onClick={addToPanier}
                                             className="w-1/12 text-white font-bold rounded bg-blue-600 hover:bg-blue-700">+</button>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-4">
                <h1>Les Desserts</h1>
                <ul>
                    {dessertsFilter.map((res,index)=>(
                        <li key={index} className="flex">
                            <div className="w-9/12">
                                <p className="font-semibold">{res.prTitre}</p>
                                <p className="font-light">{res.prDescription}</p>
                            </div>
                            <p className="w-2/12">{res.prPrix} €</p>
                            {user && <button value={res.prId} onClick={addToPanier}
                                             className="w-1/12 text-white font-bold rounded bg-blue-600 hover:bg-blue-700">+</button>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-4">
                <h1>Les boissons</h1>
                <ul>
                    {boissonsFilter.map((res,index)=>(
                        <li key={index} className="flex">
                            <div className="w-9/12">
                                <p className="font-semibold">{res.prTitre}</p>
                                <p className="font-light">{res.prDescription}</p>
                            </div>
                            <p className="w-2/12">{res.prPrix} €</p>
                            {user && <button value={res.prId} onClick={addToPanier}
                                             className="w-1/12 text-white font-bold rounded bg-blue-600 hover:bg-blue-700">+</button>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarteRestaurant;