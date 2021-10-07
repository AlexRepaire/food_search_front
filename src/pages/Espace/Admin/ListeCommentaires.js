import React from 'react';
import ListRestaurant from "../../../components/Espace/Admin/ListCommentaireParResto/ListRestaurant";
import NavigationEspaceAdmin from "./NavigationEspaceAdmin";

const ListeCommentaires = () => {
    return (
        <div>
            <NavigationEspaceAdmin />
            <ListRestaurant/>
        </div>
    );
};

export default ListeCommentaires;