import React from 'react';
import FieldForm from "../../../../UI/FieldForm";

const FormCarteRestaurant = () => {

    return (

        <div className="flex justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-6 pb-24">
                    <form className="lg:block justify-center w-full">
                        <h2 className="text-3xl text-center text-gray-700 mb-4">Ajouter un plat ou boisson</h2>
                        <FieldForm label="Nom du plat/boisson"/>
                        <FieldForm label="Prix"/>
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            <span className="font-medium text-gray-700">Type de plat/boisson</span>
                            <select className="form-select border rounded-md block w-full mb-2 mt-1 py-2" >
                                <option className='text-center'>selectionner plat / boisson</option>
                                <option>Entrée</option>
                                <option>Plat</option>
                                <option>Dessert</option>
                                <option>Boisson</option>
                            </select>
                         </label>
                        <FieldForm label="Description (facultatif)"/>
                        <button className="btnUpdate ">AJOUTER</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default FormCarteRestaurant;
