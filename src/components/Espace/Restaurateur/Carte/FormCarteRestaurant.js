import React from 'react';
import FieldForm from "../../../../UI/FieldForm";

const FormCarteRestaurant = ({categoriePlat, handleAjoutPlat, ajouterPlat}) => {

    const formulaireAjoutPlat = e => {
        e.preventDefault();
        ajouterPlat();
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-6 pb-24">
                    <form className="lg:block justify-center w-full" onSubmit={formulaireAjoutPlat}>
                        <h2 className="text-3xl text-center text-gray-700 mb-4">Ajouter un plat ou boisson</h2>
                        <FieldForm label="Nom du plat/boisson" type="text" name="prTitre" onChange={handleAjoutPlat}/>
                        <FieldForm label="Prix" name="prPrix" type="number" onChange={handleAjoutPlat}/>
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            <span className="font-medium text-gray-700">Type de plat/boisson</span>
                            <select className="form-select border rounded-md block w-full mb-2 mt-1 py-2" name="fsCategPlatsByPrIdCat" onChange={handleAjoutPlat}>
                                {categoriePlat.map((res,index)=>(
                                    <option className='text-center' key={index} value={index}>{res.cpType}</option>
                                ))}
                            </select>
                         </label>
                        <FieldForm label="Description (facultatif)"type="text" name="prDescription" onChange={handleAjoutPlat}/>
                        <button className="btnPrimary" type="submit">AJOUTER</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default FormCarteRestaurant;
