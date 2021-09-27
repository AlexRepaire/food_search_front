import React, {useState} from 'react';
import FormRoleSignUp from "../../components/Sign-up/FormRoleSignUp";
import FormAdresseUtilisateurSignUp from "../../components/Sign-up/FormAdresseUtilisateurSignUp";
import FormUserSignUp from "../../components/Sign-up/FormUserSignUp";
import FormRestaurantSignUp from "../../components/Sign-up/FormRestaurantSignUp";
import FormAdresseRestaurantSignUp from "../../components/Sign-up/FormAdresseRestaurantSignUp";
import FormStepBar from "../../components/Sign-up/FormStepBar";

const Inscription = () => {
    const [role, setRole] = useState();
    const [adresse, setAdresse] = useState({});
    const [adresseRestaurant, setAdresseRestaurant] = useState({});
    const [utilisateur, setUtilisateur] = useState({});
    const [restaurant, setRestaurant] = useState({});
    const [formIndex, setFormIndex] = useState(1);

    /**
     * REFACTORING A FAIRE
     *
     * rendre les méthodes génériques en un composant
     * Supprimer les states enfants et les méthodes
     */

    const setRoleHandler = data => {
        setRole(data);
    };

    const setAdresseHandler = data => {
      setAdresse(data);
    };

    const setAdresseRestaurantHandler = data => {
        setAdresseRestaurant(data);
    };

    const setUtilisateurHandler = data => {
        setUtilisateur(data);
    };

    const setRestaurantHandler = data => {
        setRestaurant(data);
    };

    const inscriptionUtilisateur = () => {
        //Insérer adresse dans db
        //Récuperer response et redefinir le user puis insérer le user en db
        const utilisateur = {...utilisateur};
        utilisateur.fsAdresseByUtiId = adresse;
        setUtilisateur(utilisateur);
    };

    const inscriptionRestaurant = () => {
        //Insérer adresse dans db
        //Récuperer response et redefinir le user(gérant) puis insérer le user en db
        const newUtilisateur = {...utilisateur};
        newUtilisateur.fsAdresseByUtiId = adresse;
        setUtilisateur(newUtilisateur);

        const newRestaurant = {...restaurant};
        newRestaurant.fsAdresseByRestId = adresseRestaurant;
        newRestaurant.fsUtilisateurByRestIdUti = utilisateur;
        setRestaurant(newRestaurant);
    };

    const modifyIndex = (index) => {
        setFormIndex(index);
    };

    const elements = [
        <FormRoleSignUp
            modifyIndex={modifyIndex}
            setRoleHandler={setRoleHandler}/>,
        <FormAdresseUtilisateurSignUp
            modifyIndex={modifyIndex}
            value={adresse}
            role={role}
            setAdresseHandler={setAdresseHandler}/>,
        <FormUserSignUp
            modifyIndex={modifyIndex}
            value={utilisateur}
            role={role}
            inscriptionUtilisateur={inscriptionUtilisateur}
            setUtilisateurHandler={setUtilisateurHandler}/>,
        <FormAdresseRestaurantSignUp
            modifyIndex={modifyIndex}
            value={adresseRestaurant}
            setAdresseRestaurantHandler={setAdresseRestaurantHandler}/>,
        <FormRestaurantSignUp
            modifyIndex={modifyIndex}
            value={restaurant}
            setRestaurantHandler={setRestaurantHandler}
            inscriptionRestaurant={inscriptionRestaurant}/>,
    ];

    const viewElements = elements.map((item, index) => {
        if ((index + 1) === formIndex) {
            return item;
        }
    });

    return (
        <div className="justify-center h-screen">
            {formIndex === 1 ? null : <FormStepBar role={role} index={formIndex}/>}
            {viewElements}
        </div>
    );
};

export default Inscription;