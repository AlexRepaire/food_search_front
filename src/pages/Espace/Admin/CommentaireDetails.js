import React, {Fragment} from 'react';
import ListCommentaire from "../../../components/Espace/Admin/ListCommentaireParResto/ListCommentaire";
import NavigationEspaceAdmin from "./NavigationEspaceAdmin";

const CommentaireDetails = () => {
    return (
        <Fragment>
            <NavigationEspaceAdmin/>
            <div className="px-8 py-8">
                <div>
                    <p>Nom Resto</p>
                </div>
                <ListCommentaire/>
            </div>
        </Fragment>
    );
};

export default CommentaireDetails;