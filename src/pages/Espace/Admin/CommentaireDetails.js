import React from 'react';
import ListCommentaire from "../../../components/Espace/Admin/ListCommentaireParResto/ListCommentaire";

const CommentaireDetails = () => {
    return (
        <div className="px-8 py-8">
            <div>
                <p>Nom Resto</p>
            </div>
            <ListCommentaire/>
        </div>
    );
};

export default CommentaireDetails;