import React from 'react';

const InformationsCommande = ({toggleHandlerCommandeView}) => {


    return (
        <div className="mx-20">
            <div className="p-4">
                <button
                    className="flex text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-auto mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleHandlerCommandeView}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                              clip-rule="evenodd"/>
                    </svg>Retour
                </button>
            </div>
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
