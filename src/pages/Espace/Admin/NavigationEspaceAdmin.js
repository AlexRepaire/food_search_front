import React from 'react';
import {Link} from "react-router-dom";


const NavigationEspaceAdmin = () => {
    return (
        <div className="border-b-2">
            <nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 flex flex-wrap items-center text-base justify-center ">
                <Link class="mx-5 hover:text-gray-900" to={'/espaceAdmin'}>Liste Messages</Link>
                <div>|</div>
                <Link class="mx-5 hover:text-gray-900" to={'/espaceAdmin/ListeCommentairesParRestaurant'} >Liste commentaires par resto</Link>
            </nav>
        </div>
    );
};

export default NavigationEspaceAdmin;