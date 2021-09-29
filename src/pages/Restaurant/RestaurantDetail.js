import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import SliderRestaurant from "../../components/Restaurant/SliderRestaurant";
import InformationsRestaurant from '../../components/Restaurant/InformationsRestaurant';
import AvisRestaurant from "../../components/Restaurant/AvisRestaurant";
import MenuRestaurant from "../../components/Restaurant/MenuRestaurant";
import CarteRestaurant from "../../components/Restaurant/CarteRestaurant";

const RestaurantDetail = () => {

    const {id} = useParams();
    const [nav, setNav] = useState("avis");

    const navHandler = e => {
        setNav(e.target.value);
    };

    return (
        <div className="mx-64">
            <div className="my-8">
                <SearchFormBar />
            </div>
            <div className="flex">
                <SliderRestaurant />
                <InformationsRestaurant/>
            </div>
            <div className="my-8">
                <div className="flex w-6/12 border-b-2 my-8">
                    <button className={nav === "avis" ? 'text-blue-500 font-bold' : 'text-black'} value="avis" onClick={navHandler}>Avis</button>
                    <div className="border-r-2 mx-8"></div>
                    <button className={nav === "carte" ? 'text-blue-500 font-bold' : 'text-black'} value="carte" onClick={navHandler}>Carte</button>
                    <div className="border-r-2 mx-8"></div>
                    <button className={nav === "menu" ? 'text-blue-500 font-bold' : 'text-black'} value="menu" onClick={navHandler}>Menu</button>
                </div>
                {nav === "avis" && <AvisRestaurant/>}
                {nav === "carte" && <CarteRestaurant/>}
                {nav === "menu" && <MenuRestaurant/>}
            </div>
        </div>
    );
};

export default RestaurantDetail;