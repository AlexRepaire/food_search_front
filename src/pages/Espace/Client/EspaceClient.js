import React from 'react';
import InformationsClient from "../../../components/Espace/Client/InformationsClient";
import ListFavoris from "../../../components/Espace/Client/ListFavoris";
import HistoriquesCommande from "../../../components/Espace/Client/HistoriquesCommande";
import NavigationEspaceClient from "./NavigationEspaceClient";

const EspaceClient = () => {
    return (
        <div >
            <NavigationEspaceClient/>
            <h1 className="text-center pb-4 font-bold">Espace Client</h1>
            <div className="flex w-full">
                <InformationsClient />
                <div className="border-l-2"></div>
                <ListFavoris />
            </div>

            <HistoriquesCommande />
        </div>

    );
};

export default EspaceClient;