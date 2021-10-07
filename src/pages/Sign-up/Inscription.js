import React, {useState} from 'react';
import FormRoleSignUp from "../../components/Sign-up/FormRoleSignUp";
import FormAdresseUtilisateurSignUp from "../../components/Sign-up/FormAdresseUtilisateurSignUp";
import FormUserSignUp from "../../components/Sign-up/FormUserSignUp";
import FormRestaurantSignUp from "../../components/Sign-up/FormRestaurantSignUp";
import FormAdresseRestaurantSignUp from "../../components/Sign-up/FormAdresseRestaurantSignUp";
import FormStepBar from "../../components/Sign-up/FormStepBar";
import adresseService from "../../services/adresseService";
import authService from "../../services/security/authService";

const Inscription = () => {
    const [role, setRole] = useState();
    const [adresse, setAdresse] = useState({
        adrNumero: '',
        adrRue: '',
        adrCplAdr: '',
        adrCp: '',
        adrVille: '',
        adrPays: ''
    })

    const [adresseRestaurant, setAdresseRestaurant] = useState({
        adrNumero: '',
        adrRue: '',
        adrCplAdr: '',
        adrCp: '',
        adrVille: '',
        adrPays: '',
    });
    const [utilisateur, setUtilisateur] = useState({
        utiMail:'',
        utiMdp:'',
        utiDdn:'',
        utiNom:'',
        utiPrenom:'',
        utiTel:'',
        utiPseudo:'',
        fsAdresseByUtiId:'',
        fsRoleByUtiIdRol:'',
    });
    const [restaurant, setRestaurant] = useState({
        restNom:'',
        restTel:'',
        fsCommandesByRestId:'',
        fsPlatsRestaurantsByRestId:'',
        fsAdresseByRestId:'',
        fsUtilisateurByRestIdUti:'',
        fsSpecialiteByRestIdSpe:'',
    });
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

    const setAdresseHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAdresse({...adresse, [name]: value})
    };

    const setAdresseRestaurantHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAdresseRestaurant({...adresseRestaurant, [name]: value})
    };

    const setUtilisateurHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setUtilisateur({...utilisateur, [name]: value})
    };

    const setRestaurantHandler =  ({currentTarget}) => {
        const { name, value} = currentTarget;
        setRestaurant({...restaurant, [name]: value})
    };

    const inscriptionUtilisateur = async () => {
        const response = await adresseService.create(adresse);
        const data = await response.data;
        let user = {...utilisateur, fsAdresseByUtiId: data, fsRoleByUtiIdRol: role};
        await authService.register(user);
    };

    /**
     * FINIR LA PARTIE RESTAURANT
     */
    const inscriptionRestaurant = () => {
        //Insérer adresse dans db
        //Récuperer response et redefinir le user(gérant) puis insérer le user en db
        const newUtilisateur = {...utilisateur};
        newUtilisateur.fsAdresseByUtiId = adresse.adrId;
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
            role={role}
            adresse={adresse}
            setAdresseHandler={setAdresseHandler}/>,
        <FormUserSignUp
            modifyIndex={modifyIndex}
            utilisateur={utilisateur}
            role={role}
            inscriptionUtilisateur={inscriptionUtilisateur}
            setUtilisateurHandler={setUtilisateurHandler}/>,
        <FormAdresseRestaurantSignUp
            modifyIndex={modifyIndex}
            adresseRestaurant={adresseRestaurant}
            setAdresseRestaurantHandler={setAdresseRestaurantHandler}/>,
        <FormRestaurantSignUp
            modifyIndex={modifyIndex}
            restaurant={restaurant}
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
