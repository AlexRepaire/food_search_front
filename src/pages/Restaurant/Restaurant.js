import React from 'react';
import {useLocation} from "react-router-dom";
import ListRestaurant from "../../components/Restaurant/ListRestaurant";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import CarteMonRestaurant from "../Espace/Restaurateur/CarteMonRestaurant";

const Restaurant = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const isQuoi = queryParams.get('quoi');
    const isOu = queryParams.get('ou');

    return (
        <div>
            <div>
                <SearchFormBar />
            </div>
            <div className="my-16 mx-64">
                <div className="my-16 border-b-2">
                    <h1>Liste des Restaurants sur {isOu}</h1>
                </div>
                <div className="flex">
                    <ListRestaurant />
                    <CarteMonRestaurant />
                </div>

            </div>
        </div>

    );
};

export default Restaurant;