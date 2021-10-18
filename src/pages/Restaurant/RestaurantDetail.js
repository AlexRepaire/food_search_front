import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import SliderRestaurant from "../../components/Restaurant/SliderRestaurant";
import InformationsRestaurant from '../../components/Restaurant/InformationsRestaurant';
import AvisRestaurant from "../../components/Restaurant/AvisRestaurant";
import MenuRestaurant from "../../components/Restaurant/MenuRestaurant";
import CarteRestaurant from "../../components/Restaurant/CarteRestaurant";
import restaurantService from "../../services/restaurantService";

const RestaurantDetail = () => {
    const {id} = useParams();
    const [nav, setNav] = useState("avis");
    const [search, setSearch] = useState({
        quoi: "",
        ou: ""
    });
    const [restaurant, setRestaurant] = useState({});

    const navHandler = e => {
        setNav(e.target.value);
    };

    const slide = [
        {
            url: '/images/restaurant.png',
            caption: 'Slide 1'
        },
        {
            url: '/images/client.jpg',
            caption: 'Slide 2'
        },
        {
            url: '/images/coverSearchForm.png',
            caption: 'Slide 3'
        },
    ];

    const recupDataRestaurant = async () => {
        const res = await restaurantService.get(id);
        const data = res.data;
        setRestaurant(data);
        console.log(data)
    }

    useEffect(async ()=>{
        await recupDataRestaurant();
    },[])

    return (
        <div className="mx-32">
            <div className="my-8">
                <SearchFormBar search={search}/>
            </div>
            <div className="flex">
                <SliderRestaurant slideData={slide} />
                <InformationsRestaurant />
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