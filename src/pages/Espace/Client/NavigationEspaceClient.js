import React, {Fragment} from 'react';
import EspaceClient from "./EspaceClient";
import Panier from "./Panier";
import {Link, Route} from "react-router-dom";

const NavigationEspaceClient = () => {
    return (
        <Fragment>
            <div className="border-b-2">
                <nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 flex flex-wrap items-center text-base justify-center ">
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceClient'}>Profil</Link>
                    <div>|</div>
                    <Link class="mx-5 hover:text-gray-900" to={'/espaceClient/Panier'} >Panier</Link>
                </nav>
            </div>

            <Route exact path="/espaceClient" component={EspaceClient} />
            <Route exact path="/espaceClient/panier" component={Panier} />
        </Fragment>
    );
};

export default NavigationEspaceClient;