import React from 'react';
import TableauListCommandes from "../../../components/Espace/Restaurateur/ListCommande/TableauListCommandes";

const ListeCommandeMonRestaurant = () => {
    return (
        <div>
            <h1 className="text-center mt-8">Liste Commande resto</h1>
            <TableauListCommandes/>
        </div>
    );
};

export default ListeCommandeMonRestaurant;
