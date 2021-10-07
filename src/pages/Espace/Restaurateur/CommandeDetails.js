import React from 'react';
import InformationsCommande from "../../../components/Espace/Restaurateur/ListCommande/InformationsCommande";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";

function CommandeDetails() {
    return (
        <div>
            <NavigationEspaceRestaurant/>
            <InformationsCommande/>
        </div>
    );
}

export default CommandeDetails;
