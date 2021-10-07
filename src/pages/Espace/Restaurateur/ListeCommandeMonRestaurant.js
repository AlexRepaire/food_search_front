import React from 'react';
import TableauListCommandes from "../../../components/Espace/Restaurateur/ListCommande/TableauListCommandes";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";

const ListeCommandeMonRestaurant = () => {
    return (
        <div>
            <NavigationEspaceRestaurant/>
            <h1 className="text-center mt-8">Liste Commande resto</h1>
            <TableauListCommandes/>
        </div>
    );
};

export default ListeCommandeMonRestaurant;
