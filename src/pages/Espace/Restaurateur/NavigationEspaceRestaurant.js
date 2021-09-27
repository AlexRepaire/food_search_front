import React, {Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import InformationMonRestaurant from "../Restaurateur/InformationMonRestaurant";
import CarteMonRestaurant from "./CarteMonRestaurant";
import MenuMonRestaurant from "./MenuMonRestaurant";
import ListeCommandeMonRestaurant from "./ListeCommandeMonRestaurant";

const NavigationEspaceRestaurant = () => {
    return (
        <Fragment>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                <Link class="mr-5 hover:text-gray-900" to={'/espaceRestaurateur'}>Informations</Link>
                <Link class="mr-5 hover:text-gray-900" to={'/espaceRestaurateur/carte'}>Carte</Link>
                <Link class="mr-5 hover:text-gray-900" to={'/espaceRestaurateur/menu'}>Menu</Link>
                <Link class="mr-5 hover:text-gray-900" to={'/espaceRestaurateur/commandes'}>Commandes</Link>
            </nav>
            <Route exact path="/espaceRestaurateur" component={InformationMonRestaurant} />
            <Route path="/espaceRestaurateur/carte" component={CarteMonRestaurant} />
            <Route path="/espaceRestaurateur/menu" component={MenuMonRestaurant} />
            <Route path="/espaceRestaurateur/commandes" component={ListeCommandeMonRestaurant} />
            <Route path="/espaceRestaurateur/commandes/:id" component={ListeCommandeMonRestaurant} />
        </Fragment>

    );
};

export default NavigationEspaceRestaurant;