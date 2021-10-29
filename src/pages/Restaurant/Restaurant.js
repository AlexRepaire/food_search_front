import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ListRestaurant from "../../components/Restaurant/ListRestaurant";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import restaurantService from "../../services/restaurantService";
import MapRestaurant from "../../components/Restaurant/MapRestaurant";
import axios from "axios";

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

    const [position, setPosition] = useState({
        lat: -3.745,
        lng: -38.523
    });

    const [infoMarkerList, setInfoMarkerList] = useState([]);

    const recupPosition = async (ville) => {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ville},+CA&key=AIzaSyAHTWG8Oh9kEj7div6Kqr4wlt9zqzVcMrw`);
        const coord = await res.data.results[0].geometry.location;
        await setPosition(coord);
    };

    const listRestMarkers = async (listRest) => {
          let array = [];
          listRest.map(async res => {
              const adresse = `${res.fsAdresseByRestId.adrNumero}, ${res.fsAdresseByRestId.adrRue}, ${res.fsAdresseByRestId.adrVille}, ${res.fsAdresseByRestId.adrCplAdr}, ${res.fsAdresseByRestId.adrPays}, ${res.fsAdresseByRestId.adrCp}`;
              const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adresse},+CA&key=AIzaSyAHTWG8Oh9kEj7div6Kqr4wlt9zqzVcMrw`);
              const coord = await response.data.results[0].geometry.location;
              const data = {
                  coord: await coord,
                  adresse: res.fsAdresseByRestId,
                  restNom: res.restNom,
              };
              array.push(data);
          });
         await setInfoMarkerList(array);

    };

    const handleChange = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setSearch({...search, [name]: value})
    };

    const recupListRest = async (ville) => {
        const listRest = await restaurantService.getRestByVille(ville);
        await setListRestaurant(listRest.data);
        await listRestMarkers(listRest.data);

    };


    useEffect(async ()=>{
        let quoi = queryParams.get('quoi');
        let ville = queryParams.get('ou');
        await setSearch({ou: ville, quoi: quoi})
        await recupPosition(ville)

        await recupListRest(ville)
    },[])

    return (
        <div>
            <div>
                <SearchFormBar recupListRest={recupListRest} handleChange={handleChange} search={search}/>
            </div>
            <div className="my-16 mx-32">
                <div className=" border-b-2">
                    <h1>Liste des Restaurants sur {search.ou}</h1>
                </div>
                <div className="flex">
                    <ListRestaurant listRestaurant={listRestaurant}/>
                    <MapRestaurant ville={position} infoMarkerList={infoMarkerList}/>
                </div>

            </div>
        </div>

    );
};

export default Restaurant;