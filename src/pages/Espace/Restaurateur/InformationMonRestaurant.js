import React from 'react';
import InformationsRestaurant from "../../../components/Espace/Restaurateur/Infos/InformationsRestaurant";
import SliderRestaurant from "../../../components/Restaurant/SliderRestaurant";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";

const InformationMonRestaurant = () => {

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
