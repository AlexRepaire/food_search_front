import React from 'react';

const InformationsRestaurant = () => {
    return (
        <div className="w-6/12 mx-8">
            <div className="mb-4">
                <h1 className="mb-4">Nom du restaurant</h1>
                <p>50, place de foodsearch - 59600 Maubeuge</p>
                <p className="mb-4">Prix moyen : 22€</p>
                <h1>Horaires</h1>
            </div>
            <div className="flex">
                <div className="w-6/12">
                    <p className="font-bold mb-2">Ouverture</p>
                    <ul>
                        <li><p>Lundi:</p></li>
                        <li><p>Mardi:</p></li>
                        <li><p>Mercredi:</p></li>
                        <li><p>Jeudi:</p></li>
                        <li><p>Vendredi:</p></li>
                        <li><p>Samedi:</p></li>
                        <li><p>Dimanche:</p></li>
                    </ul>
                </div>
                <div className="w-6/12">
                    <p className="font-bold">Période de fermeture</p>

                </div>
            </div>

        </div>
    );
};

export default InformationsRestaurant;