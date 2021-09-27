import React from 'react';
import {Link, Route} from "react-router-dom";
import ListeMessages from "./ListeMessages";
import ListeCommentaires from "./ListeCommentaires";
import ContacterUtilisateur from "./ContacterUtilisateur";
import MessageDetail from "./MessageDetail";
import CommentaireDetails from "./CommentaireDetails";

const NavigationEspaceAdmin = () => {
    return (
        <div>
            <Link to={'/espaceAdmin'}>Liste Messages</Link>
            <Link to={'/espaceAdmin/ListeCommentairesParRestaurant'} >Liste commentaires par resto</Link>
            <Link to={'/espaceAdmin/ContacterUtilisateur'} >Contacter utilisateur</Link>

            <Route exact path="/espaceAdmin" component={ListeMessages} />
            <Route exact path="/espaceAdmin/message/:id" component={MessageDetail} />
            <Route path="/espaceAdmin/ListeCommentairesParRestaurant" component={ListeCommentaires} />
            <Route path="/espaceAdmin/ListeCommentairesParRestaurant/:id" component={CommentaireDetails} />
            <Route path="/espaceAdmin/ContacterUtilisateur" component={ContacterUtilisateur}/>
        </div>
    );
};

export default NavigationEspaceAdmin;