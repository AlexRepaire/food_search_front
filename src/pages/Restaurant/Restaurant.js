import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ListRestaurant from "../../components/Restaurant/ListRestaurant";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import restaurantService from "../../services/restaurantService";

const Restaurant = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [search, setSearch] = useState({
        quoi: "",
        ou: ""
    });
    const [listRestaurant, setListRestaurant] = useState([
        {restNom:"",
            restId:'',
            fsSpecialiteByRestIdSpe: {
                speType:''
            },
            fsAdresseByRestId:{
                adrVille:''
            }}
    ]);

    const handleChange = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setSearch({...search, [name]: value})
    };

    const recupListRest = async () => {
        const listRest = await restaurantService.getRestByVille(search.ou);
        await setListRestaurant(listRest.data);
        console.log(listRest)
    };


    useEffect(async ()=>{
        let quoi = queryParams.get('quoi');
        let ville = queryParams.get('ou');
        await setSearch({ou: ville, quoi: quoi})

        await recupListRest()
    },[])

    return (
        <div>
            <div>
                <SearchFormBar recupListRest={recupListRest} handleChange={handleChange} search={search}/>
            </div>
            <div className="my-16 mx-32">
                <div className="my-16 border-b-2">
                    <h1>Liste des Restaurants sur {search.ou}</h1>
                </div>
                <div className="flex">
                    <ListRestaurant listRestaurant={listRestaurant}/>
                </div>

            </div>
        </div>

    );
};

export default Restaurant;