import React, {Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import ListeMessages from "./ListeMessages";
import ListeCommentaires from "./ListeCommentaires";
import ContacterUtilisateur from "./ContacterUtilisateur";
import MessageDetail from "./MessageDetail";
import CommentaireDetails from "./CommentaireDetails";

const NavigationEspaceAdmin = () => {
    return (
        <div className="border-b-2">
            <nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 flex flex-wrap items-center text-base justify-center ">
                <Link class="mx-5 hover:text-gray-900" to={'/espaceAdmin'}>Liste Messages</Link>
                <div>|</div>
                <Link class="mx-5 hover:text-gray-900" to={'/espaceAdmin/ListeCommentairesParRestaurant'} >Liste commentaires par resto</Link>
                <div>|</div>
                <Link class="mx-5 hover:text-gray-900" to={'/espaceAdmin/ContacterUtilisateur'} >Contacter utilisateur</Link>
            </nav>
        </div>
    );
};

export default NavigationEspaceAdmin;