import React, {useCallback, useContext, useEffect, useState} from 'react';
import AuthContext from "../../store/auth-context";
import FormAdresseRestaurantSignUp from "../../components/Sign-up/FormAdresseRestaurantSignUp";
import FormRestaurantSignUp from "../../components/Sign-up/FormRestaurantSignUp";
import FormStepBar from "../../components/Sign-up/FormStepBar";
import adresseService from "../../services/adresseService";
import restaurantService from "../../services/restaurantService";
import {useHistory} from "react-router-dom";
import specialiteService from "../../services/specialiteService";
import utilisateurService from "../../services/utilisateurService";
import panierService from "../../services/panierService";

const InscriptionRestaurant = () => {
    const auth  = useContext(AuthContext);
    let history = useHistory();

    const [adresseRestaurant, setAdresseRestaurant] = useState({
        adrNumero: '',
        adrRue: '',
        adrCplAdr: '',
        adrCp: '',
        adrVille: '',
        adrPays: '',
    });
    const [restaurant, setRestaurant] = useState({
        restNom:'',
        restTel:'',
        restIban:'',
        restSiret:'',
        fsCommandesByRestId:[],
        fsPlatsRestaurantsByRestId:[],
        fsAdresseByRestId:'',
        fsUtilisateurByRestIdUti:'',
        fsSpecialiteByRestIdSpe:'',
    });
    const [specialite, setSpecialite] = useState([]);

    const recupData = useCallback(async () => {
        const arraySpecialite = await specialiteService.getAll();
        const data = await arraySpecialite.data;
        setSpecialite(data);
    },[]);

    useEffect( async ()=>{
        await recupData();
    },[recupData])

    const [formIndex, setFormIndex] = useState(1);

    const setAdresseRestaurantHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAdresseRestaurant({...adresseRestaurant, [name]: value})
    };

    const setRestaurantHandler =  ({currentTarget}) => {
        const { name, value} = currentTarget;
        setRestaurant({...restaurant, [name]: value})
    };

    const inscriptionRestaurant = async () => {
        const response = await adresseService.create(adresseRestaurant);
        const data = await response.data;
        const idUti = JSON.parse(auth.user);
        const userData = await utilisateurService.get(idUti.id);
        let restaurantData = {...restaurant,
            fsAdresseByRestId: data,
            fsUtilisateurByRestIdUti: userData.data,
            fsSpecialiteByRestIdSpe: specialite[restaurant.fsSpecialiteByRestIdSpe]
        };
        console.log(restaurantData)
        restaurantService.create(restaurantData)
            .then(response => {
                console.log(response);
                history.push('/espaceRestaurateur');
            })
            .catch(error => {
                adresseService.remove(data.adrId);
                console.log(error);
            })
    };

    const modifyIndex = (index) => {
        setFormIndex(index);
    };

    const elements = [
        <FormAdresseRestaurantSignUp
            modifyIndex={modifyIndex}
            adresseRestaurant={adresseRestaurant}
            setAdresseRestaurantHandler={setAdresseRestaurantHandler}/>,
        <FormRestaurantSignUp
            modifyIndex={modifyIndex}
            restaurant={restaurant}
            setRestaurantHandler={setRestaurantHandler}
            specialite={specialite}
            inscriptionRestaurant={inscriptionRestaurant}/>,
    ];

    const viewElements = elements.map((item, index) => {
        if ((index + 1) === formIndex) {
            return item;
        }
    });

    return (
        <div className="justify-center h-screen">
            <FormStepBar index={formIndex}/>
            {viewElements}
        </div>
    );
};

export default InscriptionRestaurant;