import React from 'react';
import NavigationEspaceClient from "./NavigationEspaceClient";
import PanierComp from "../../../components/Espace/Client/PanierComp";

const Panier = () => {

    return (
        <div>
            <NavigationEspaceClient />
            <PanierComp />
        </div>
    );
};

export default Panier;