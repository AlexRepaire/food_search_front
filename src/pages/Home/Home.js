import React, {useCallback, useEffect, useState} from 'react';
import SearchFormHome from "../../components/SearchForm/SearchFormHome";
import CarouselComp from "../../components/Carousel/CarouselComp";
import restaurantService from "../../services/restaurantService";

const Home = () => {
    const [carrousel, setCarrousel] = useState([
        {restNom:"",
        restId:'',
        fsSpecialiteByRestIdSpe: {
            speType:''
        },
            fsAdresseByRestId:{
            adrVille:''
            }}
    ]);
    const [carrousel2, setCarrousel2] = useState([
        {restNom:"",
            restId:'',
            fsSpecialiteByRestIdSpe: {
                speType:''
            },
        fsAdresseByRestId:{
            adrVille:''
        }}
    ]);

    const recupListRestByVille = async (ville) => {
        const listRest = await restaurantService.getRestByVille(ville);
        await setCarrousel(listRest.data);
    };

    const recupListRestByVille2 = async (ville) => {
        const listRest = await restaurantService.getRestByVille(ville);
        await setCarrousel2(listRest.data);
    };

    useEffect(async ()=>{
        await recupListRestByVille("Maubeuge");
        await recupListRestByVille2("Valenciennes")
    },[])

    return (
        <div>
            <SearchFormHome />
            <CarouselComp title="les restaurant de Maubeuge" data={carrousel}/>
            <CarouselComp title="les restaurant de Valenciennes" data={carrousel2}/>
        </div>
    );
};

export default Home;