import React from 'react';
import FormMenuRestaurant from "../../../components/Espace/Restaurateur/Menu/FormMenuRestaurant";
import TableauListMenus from "../../../components/Espace/Restaurateur/Menu/TableauListMenus";

const MenuMonRestaurant = () => {
    return (
        <div className="text-center">
            <h1>Menu du resto</h1>
            <FormMenuRestaurant/>
            <TableauListMenus/>
        </div>
    );
};

export default MenuMonRestaurant;
