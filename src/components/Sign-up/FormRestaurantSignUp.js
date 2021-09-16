import React, {useState} from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const FormRestaurantSignUp = (props) => {
    const [nom, setNom] = useState();
    const [tel, setTel] = useState();

    //données de test
    const dataSpecialite = [
        {id:1, type: "Pizzeria"},
        {id:2, type: "Indien"},
        {id:3, type: "Chinois"},
        {id:4, type: "Japonais"},
        {id:5, type: "Italiens"},
    ];
/*
    return (
        <form onSubmit={nextStep} className="mt-60">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Veuillez saisir vos informations</h2>
            <div className="px-12 pb-10">
                <div className="w-full mb-2">
                    <label htmlFor="">Nom</label>
                    <Input type="text" placeholder="Nom" value={nom} onChange={nomHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Prénom</label>
                    <Input  type="text" placeholder="Prénom" value={prenom} onChange={prenomHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Téléphone</label>
                    <Input type="number" placeholder="Téléphone" value={tel} onChange={telHandler}/>
                </div>
                <div className="w-full mb-2">
                    <label htmlFor="">Pseudo</label>
                    <Input type="text" placeholder="Pseudo" value={pseudo} onChange={pseudoHandle}/>
                </div>
                <div className="flex items-center justify-evenly">
                    <Button
                        className="btnDanger"
                        onClick={prevStep}>Précédent</Button>
                    {viewInput}
                </div>
            </div>

        </form>
    );
    */
};

export default FormRestaurantSignUp;