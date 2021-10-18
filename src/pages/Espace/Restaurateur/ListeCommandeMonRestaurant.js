import React, {useEffect, useState} from 'react';
import TableauListCommandes from "../../../components/Espace/Restaurateur/ListCommande/TableauListCommandes";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import InformationsCommande from "../../../components/Espace/Restaurateur/ListCommande/InformationsCommande";

const ListeCommandeMonRestaurant = () => {
    const [toggleCommandesView, setToggleCommandesView] = useState(true);

    const toggleHandlerCommandeView = () => {
        setToggleCommandesView(!toggleCommandesView);
    }

    /**
     * attendre la partie de alexis pour utiliser la méthode
     * @returns {Promise<void>}
     */
    const recupListesCommandes = async () => {

    };

    useEffect(async ()=> {
        await recupListesCommandes();
    },[])

    return (
        <div>
            <NavigationEspaceRestaurant/>
            <h1 className="text-center mt-8">Liste Commande resto</h1>
            {toggleCommandesView ?
                <TableauListCommandes toggleHandlerCommandeView={toggleHandlerCommandeView}/> :
                <InformationsCommande toggleHandlerCommandeView={toggleHandlerCommandeView}/>
            }
        </div>
    );
};

export default ListeCommandeMonRestaurant;
