import React from 'react';
import {Link} from "react-router-dom";

const InformationsCommande = () => {
    return (
        <div className="mx-20">
            <Link to='/espaceRestaurateur/commandes'>
                <button className='btnPrimary mt-4'>retour</button>
            </Link>
            <div className="my-8">
            <ul>
                <li>Numéro de commande</li>
                <li>nom client</li>
                <li>numero de téléphone</li>
                <li>mail</li>
                <li>Prix total</li>
            </ul>
            </div>
            <div className="my-8">
            <ul>
                <li>plat 1    -----------   x1</li>
                <li>plat 2    -----------   x3</li>
                <li>plat 3    -----------   x1</li>
                <li>dessert 1 -----------   x3</li>
                <li>boisson 1 -----------   x2</li>
            </ul>
            </div>
            <button className='btnPrimary mb-4'>Commande terminé</button>

        </div>
    );
};

export default InformationsCommande;
