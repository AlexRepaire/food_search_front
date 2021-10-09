import React, {Fragment, useContext, useEffect, useState} from 'react';
import InformationsRestaurant from "../../../components/Espace/Restaurateur/Infos/InformationsRestaurant";
import SliderRestaurant from "../../../components/Restaurant/SliderRestaurant";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import RestContext from "../../../store/rest-context";
import restaurantService from "../../../services/restaurantService";
import AuthContext from "../../../store/auth-context";
import {useHistory} from "react-router-dom";

const InformationMonRestaurant = () => {
    const [viewData, setViewData] = useState();
    let history = useHistory();

    const auth = useContext(AuthContext);
    const rest = useContext(RestContext);

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

    const recupDataRest = async () => {
        const user = new Object(JSON.parse(auth.user));

        const res = await restaurantService.getRestByIdUti(user.id);
        const data = res.data;

        if (data === '') {
            history.push("/inscriptionRestaurant");
        } else {
            setViewData(data);
        }
    };

    useEffect(()=>{
        recupDataRest();
    },[recupDataRest])

    return (
        <div className="mx-64">
            <NavigationEspaceRestaurant/>
            <div className="flex mt-8">
                <InformationsRestaurant />
                <SliderRestaurant slideData={slide}/>
            </div>
        </div>
    );
};

export default InformationMonRestaurant;
