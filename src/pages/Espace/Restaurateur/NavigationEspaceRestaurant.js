import React from 'react';
import {Link, Route} from "react-router-dom";
import InformationMonRestaurant from "../Restaurateur/InformationMonRestaurant";
import CarteMonRestaurant from "./CarteMonRestaurant";
import MenuMonRestaurant from "./MenuMonRestaurant";
import ListeCommandeMonRestaurant from "./ListeCommandeMonRestaurant";

const NavigationEspaceRestaurant = () => {
    return (
        <div>
            <Link to={'/espaceRestaurateur'}>Informations</Link>
            <Link to={'/espaceRestaurateur/carte'} >Carte</Link>
            <Link to={'/espaceRestaurateur/menu'} >Menu</Link>
            <Link to={'/espaceRestaurateur/commandes'} >Commandes</Link>

            <Route exact path="/espaceRestaurateur" component={InformationMonRestaurant} />
            <Route path="/espaceRestaurateur/carte" component={CarteMonRestaurant} />
            <Route path="/espaceRestaurateur/menu" component={MenuMonRestaurant} />
            <Route path="/espaceRestaurateur/commandes" component={ListeCommandeMonRestaurant} />
            <Route path="/espaceRestaurateur/commandes/:id" component={ListeCommandeMonRestaurant} />
        </div>
    );
};

export default NavigationEspaceRestaurant;