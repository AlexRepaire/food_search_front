import React, {useCallback, useContext, useEffect, useState} from 'react';
import InformationsRestaurant from "../../../components/Espace/Restaurateur/Infos/InformationsRestaurant";
import SliderRestaurant from "../../../components/Restaurant/SliderRestaurant";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import RestContext from "../../../store/rest-context";
import restaurantService from "../../../services/restaurantService";
import AuthContext from "../../../store/auth-context";
import {useHistory} from "react-router-dom";

const InformationMonRestaurant = () => {
    const {user} = useContext(AuthContext);
    let history = useHistory();

    const [viewData, setViewData] = useState({
        fsSpecialiteByRestIdSpe: {speId: '', speType: ''},
        fsUtilisateurByRestIdUti: {utiId: '', utiNom: '', utiPrenom: '', utiTel: '', utiPseudo: ''},
        fsAdresseByRestId: {adrCp: '',
            adrCplAdr: "",
            adrId: '',
            adrNumero: '',
            adrPays: "",
            adrRue: "",
            adrVille: ""},
        restIban: "",
        restId: '',
        restNom: "",
        restSiret: "",
        restTel: ""
    });


    const slide = [
        {
            url: '/images/plat1.jpg',
            caption: 'Slide 1'
        },
        {
            url: '/images/plat2.jpg',
            caption: 'Slide 2'
        },
        {
            url: '/images/plat3.jpg',
            caption: 'Slide 3'
        },
        {
            url: '/images/plat4.jpg',
            caption: 'Slide 4'
        },
    ];

    const recupDataRest = useCallback(async () => {

        const userData = new Object(JSON.parse(user));
        const res = await restaurantService.getRestByIdUti(userData.id);
        const data = res.data;

        if (data === '') {
            history.push("/inscriptionRestaurant");
        } else {
            console.log(data)
            return data
        }
    },[]);

    useEffect(  async ()=>{
        const data = await recupDataRest();
        setViewData(data);
    },[recupDataRest])

    return (
        <div className="mx-32">
            <NavigationEspaceRestaurant/>
            <div className="flex mt-8">
                <InformationsRestaurant dataRestaurant={viewData} dataAdresse={viewData.fsAdresseByRestId}/>
                <SliderRestaurant slideData={slide}/>
            </div>
        </div>
    );
};

export default InformationMonRestaurant;
