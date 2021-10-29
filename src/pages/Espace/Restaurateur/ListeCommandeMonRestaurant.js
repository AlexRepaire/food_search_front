import React, {useContext, useEffect, useState} from 'react';
import TableauListCommandes from "../../../components/Espace/Restaurateur/ListCommande/TableauListCommandes";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import InformationsCommande from "../../../components/Espace/Restaurateur/ListCommande/InformationsCommande";
import commandeService from "../../../services/commandeService";
import AuthContext from "../../../store/auth-context";
import restaurantService from "../../../services/restaurantService";

const ListeCommandeMonRestaurant = () => {
    const {user} = useContext(AuthContext);
    const [toggleCommandesView, setToggleCommandesView] = useState(true);
    const [commandesList, setCommandesList] = useState([]);
    const [commandesListFilter, setCommandesListFilter] = useState([]);
    const [commandeSelected, setCommandeSelected] = useState({
        fsCommandeDetailsByCmdId: [
            {
                cmdDetailsNom:'',
                cmdDetailsQuantite: '',
                cmdDetailsPrix: ''
            }
        ]
    });

    const toggleHandlerCommandeView = () => {
        setToggleCommandesView(!toggleCommandesView);
    }

    const showCommandeView = async e => {
        const data = commandesList.find(element => element.cmdId === parseInt(e.target.value));
        setCommandeSelected(data);
        if (data.cmdStatus === "non traité") {
            data.cmdStatus = "en cours";
            await commandeService.update(data);
        }
        setToggleCommandesView(!toggleCommandesView);
    };

    const recupListesCommandes = async () => {
        const userData = new Object(JSON.parse(user));
        const responseRest = await restaurantService.getRestByIdUti(userData.id);
        const res = await commandeService.getByRest(responseRest.data.restId);
        setCommandesList(res.data);
        setCommandesListFilter(res.data);
    };

    const handleStatutFilter = e => {
        const valueFilter = e.target.value;
        if (valueFilter === "tout") {
            setCommandesListFilter(commandesList);
        } else {
            const dataFilter = commandesList.filter(item => item.cmdStatus === valueFilter);
            setCommandesListFilter(dataFilter);
        }
    };

    useEffect(async ()=> {
        await recupListesCommandes();
    },[])

    return (
        <div>
            <NavigationEspaceRestaurant/>
            <h1 className="text-center mt-8">Liste Commande resto</h1>
            {toggleCommandesView ?
                <TableauListCommandes handleStatutFilter={handleStatutFilter} commandesListFilter={commandesListFilter} showCommandeView={showCommandeView}/> :
                <InformationsCommande commandeSelected={commandeSelected} toggleHandlerCommandeView={toggleHandlerCommandeView}/>
            }
        </div>
    );
};

export default ListeCommandeMonRestaurant;
