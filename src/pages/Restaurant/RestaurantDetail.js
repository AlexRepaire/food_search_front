import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import SliderRestaurant from "../../components/Restaurant/SliderRestaurant";
import InformationsRestaurant from '../../components/Restaurant/InformationsRestaurant';
import AvisRestaurant from "../../components/Restaurant/AvisRestaurant";
import MenuRestaurant from "../../components/Restaurant/MenuRestaurant";

const RestaurantDetail = () => {

    const {id} = useParams();
    const [nav, setNav] = useState("avis");

    const navHandler = e => {
        setNav(e.target.value);
    };

    return (
        <div className="m-8">
            <div>
                <SearchFormBar />
            </div>
            <div className="flex">
                <SliderRestaurant />
                <InformationsRestaurant/>
            </div>
            <div>
                <div>
                    <button value="avis" onClick={navHandler}>Avis</button>
                    <button value="menu" onClick={navHandler}>Menu</button>
                </div>
                {nav === "avis" && <AvisRestaurant/>}
                {nav === "menu" && <MenuRestaurant/>}
            </div>
        </div>
    );
};

export default RestaurantDetail;