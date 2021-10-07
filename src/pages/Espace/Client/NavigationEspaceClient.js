import React from 'react';

import {Link} from "react-router-dom";

const NavigationEspaceClient = () => {
    return (
        <div className="border-b-2">
            <nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 flex flex-wrap items-center text-base justify-center ">
                <Link class="mx-5 hover:text-gray-900" to={'/espaceClient'}>Profil</Link>
                <div>|</div>
                <Link class="mx-5 hover:text-gray-900" to={'/espaceClient/panier'} >Panier</Link>
            </nav>
        </div>
    );
};

export default NavigationEspaceClient;