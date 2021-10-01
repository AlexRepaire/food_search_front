import React, {Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import InformationMonRestaurant from "../Restaurateur/InformationMonRestaurant";
import CarteMonRestaurant from "./CarteMonRestaurant";
import MenuMonRestaurant from "./MenuMonRestaurant";
import ListeCommandeMonRestaurant from "./ListeCommandeMonRestaurant";
import CommandeDetails from "./CommandeDetails";

const NavigationEspaceRestaurant = () => {
    return (
        <Fragment >
            <div className="border-b-2">
                <nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 flex flex-wrap items-center text-base justify-center ">
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceRestaurateur'}>Informations</Link>
                    <div>|</div>
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceRestaurateur/carte'}>Carte</Link>
                    <div>|</div>
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceRestaurateur/menu'}>Menu</Link>
                    <div>|</div>
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceRestaurateur/commandes'}>Commandes</Link>
                </nav>
            </div>
            <Route exact path="/espaceRestaurateur" component={InformationMonRestaurant} />
            <Route path="/espaceRestaurateur/carte" component={CarteMonRestaurant} />
            <Route path="/espaceRestaurateur/menu" component={MenuMonRestaurant} />
            <Route exact path="/espaceRestaurateur/commandes" component={ListeCommandeMonRestaurant} />
            <Route path="/espaceRestaurateur/commandes/:id" component={CommandeDetails} />
        </Fragment>

    );
};

export default NavigationEspaceRestaurant;
