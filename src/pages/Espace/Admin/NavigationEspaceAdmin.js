import React, {Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import ListeMessages from "./ListeMessages";
import ListeCommentaires from "./ListeCommentaires";
import ContacterUtilisateur from "./ContacterUtilisateur";
import MessageDetail from "./MessageDetail";
import CommentaireDetails from "./CommentaireDetails";

const NavigationEspaceAdmin = () => {
    return (
        <Fragment>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                <Link class="mr-5 hover:text-gray-900" to={'/espaceAdmin'}>Liste Messages</Link>
                <Link class="mr-5 hover:text-gray-900" to={'/espaceAdmin/ListeCommentairesParRestaurant'} >Liste commentaires par resto</Link>
                <Link class="mr-5 hover:text-gray-900" to={'/espaceAdmin/ContacterUtilisateur'} >Contacter utilisateur</Link>
            </nav>
            <Route exact path="/espaceAdmin" component={ListeMessages} />
            <Route exact path="/espaceAdmin/message/:id" component={MessageDetail} />
            <Route path="/espaceAdmin/ListeCommentairesParRestaurant" component={ListeCommentaires} />
            <Route path="/espaceAdmin/ListeCommentairesParRestaurant/:id" component={CommentaireDetails} />
            <Route path="/espaceAdmin/ContacterUtilisateur" component={ContacterUtilisateur}/>
        </Fragment>
    );
};

export default NavigationEspaceAdmin;