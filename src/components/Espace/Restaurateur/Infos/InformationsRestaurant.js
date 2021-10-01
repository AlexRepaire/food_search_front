import React from 'react';

const InformationsRestaurant = () => {
        return (
            <div className="w-6/12 mx-8">
                <h1 className="mb-4">Informations restaurant</h1>

                <ul>
                    <li >Nom du restaurant :</li>
                    <li>Adresse du restaurant :</li>
                    <li>Code postale - Ville</li>
                    <li>Mail : </li>
                    <li>Numéro du téléphone :</li>
                </ul>
            </div>
        );
};

export default InformationsRestaurant;
