import React from 'react';
import FormCarteRestaurant from "../../../components/Espace/Restaurateur/Carte/FormCarteRestaurant";
import TableauListPlats from "../../../components/Espace/Restaurateur/Carte/TableauListPlats";

const CarteMonRestaurant = () => {
    return (
        <div className="text-center">
            <FormCarteRestaurant/>
            <h2 className="text-xl text-center uppercase font-bold">Liste des plats/boissons</h2>
            <TableauListPlats/>
        </div>
    );
};

export default CarteMonRestaurant;
