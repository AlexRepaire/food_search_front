import React from 'react';
import FormMenuRestaurant from "../../../components/Espace/Restaurateur/Menu/FormMenuRestaurant";
import TableauListMenus from "../../../components/Espace/Restaurateur/Menu/TableauListMenus";

const MenuMonRestaurant = () => {
    return (
        <div className="text-center">
            <FormMenuRestaurant/>
            <h2 className="text-xl text-center uppercase font-bold">Liste des Menus</h2>
            <TableauListMenus/>
        </div>
    );
};

export default MenuMonRestaurant;
