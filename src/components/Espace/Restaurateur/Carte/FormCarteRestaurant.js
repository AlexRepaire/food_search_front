import React from 'react';
import FieldForm from "../../../../UI/FieldForm";

const FormCarteRestaurant = () => {

    return (

        <div className="bg-gray flex justify-center">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                    <h5 className="text-xl font-extrabold tracking-tight text-gray-900">Ajouter un plat ou boisson</h5>
                </div>
                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <form className="hidden lg:block justify-center w-full">

                        <label className="font-medium text-gray-700">
                            Nom du plat/boison
                            <FieldForm/>
                        </label>
                        <label className="font-medium text-gray-700">
                            Prix
                            <FieldForm/>
                        </label>

                        <label className="block text-left" >
                            <span className="font-medium text-gray-700">Type de plat/boisson</span>
                            <select className="form-select border rounded-md block w-full mb-2 mt-1 py-2" >
                                <option className='text-center'>-----select plat/boisson-------</option>
                                <option>Entrée</option>
                                <option>Boisson Sans alcool</option>
                                <option>Boisson alcoolisé</option>
                                <option>Boisson pétillante</option>
                            </select>
                         </label>
                        <label className="font-medium text-gray-700">
                            Description (facultatif)
                            <FieldForm/>
                        </label>
                        <br/>
                        <button className="btnUpdate ">AJOUTER</button>
                    </form>
                </section>
            </main>

        </div>
    );
};

export default FormCarteRestaurant;
