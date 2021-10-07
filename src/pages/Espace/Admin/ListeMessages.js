import React from 'react';
import TableauListMessages from "../../../components/Espace/Admin/ListMessage/TableauListMessages";
import NavigationEspaceAdmin from "./NavigationEspaceAdmin";

const ListeMessages = () => {
    return (
        <div>
            <NavigationEspaceAdmin />
            <TableauListMessages/>
        </div>
    );
};

export default ListeMessages;