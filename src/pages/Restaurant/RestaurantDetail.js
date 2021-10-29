import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SearchFormBar from "../../components/SearchForm/SearchFormBar";
import SliderRestaurant from "../../components/Restaurant/SliderRestaurant";
import InformationsRestaurant from '../../components/Restaurant/InformationsRestaurant';
import AvisRestaurant from "../../components/Restaurant/AvisRestaurant";
import MenuRestaurant from "../../components/Restaurant/MenuRestaurant";
import CarteRestaurant from "../../components/Restaurant/CarteRestaurant";
import restaurantService from "../../services/restaurantService";
import platsRestaurantService from "../../services/platsRestaurantService";
import AuthContext from "../../store/auth-context";
import panierService from "../../services/panierService";
import utilisateurService from "../../services/utilisateurService";
import commandeService from "../../services/commandeService";
import horaireService from "../../services/horaireService";
import favorisService from "../../services/favorisService";

const RestaurantDetail = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [nav, setNav] = useState("avis");
    const [search, setSearch] = useState({
        quoi: "",
        ou: ""
    });
    const [restaurant, setRestaurant] = useState({
        fsSpecialiteByRestIdSpe: {
            speType:"",
        },
        fsAdresseByRestId: {
            adrCplAdr:"",
        }
    });
    const [plats, setPlats] = useState([]);
    const [entreesFilter, setEntreesFilter] = useState([]);
    const [platsFilter, setPlatsFilter] = useState([]);
    const [dessertsFilter, setDessertsFilter] = useState([]);
    const [boissonsFilter, setBoissonsFilter] = useState([]);
    const [evaluations, setEvaluations] = useState([]);
    const [horaires, setHoraires] = useState([]);

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
        await setRestaurant(data);
        await recupDataPlats(data.restId);
    };

    const recupAvis = async () => {
        const res = await commandeService.getByRest(id);
        const data = res.data;
        const evaluationsData = data.map(res => {return res.fsEvaluationByCmdIdEva});
        await setEvaluations(evaluationsData);
    };

    const recupHoraires = async () => {
        const res = await horaireService.getListHoraireByRest(id);
        const data = res.data;
        const array = data.map(res => {return {
            id: res.id,
            jour: res.jour,
            ouvert: res.ouvert,
            ouvertureMatin: res.ouvertureMatin,
            fermetureMatin: res.fermetureMatin,
            ouvertureApresMidi: res.ouvertureApresMidi,
            fermetureApresMidi: res.fermetureApresMidi
        }})
        await setHoraires(array);
    };

    const filterPlatCategory = async (listePlats) => {
        const entreesData = await listePlats.filter(res => res.fsCategPlatsByPrIdCat.cpType === "entrée");
        const platsData = await listePlats.filter(res => res.fsCategPlatsByPrIdCat.cpType === "plat");
        const dessertsData = await listePlats.filter(res => res.fsCategPlatsByPrIdCat.cpType === "dessert");
        const boissonsData = await listePlats.filter(res => res.fsCategPlatsByPrIdCat.cpType === "boisson");

        await setEntreesFilter(entreesData);
        await setPlatsFilter(platsData);
        await setDessertsFilter(dessertsData);
        await setBoissonsFilter(boissonsData);
    };

    const addToPanier = async e => {
        const id = e.target.value;
        const data = plats.find(item => item.prId === parseInt(id));
        const dataUser = await utilisateurService.get(user.id);
        const itemPanier = {
            panTitre: data.prTitre,
            panPrix: data.prPrix,
            panQuantite: 1,
            panIdRestaurant: data.fsRestaurantByPrIdRes.restId,
            fsUtilisateurByPanIdUti: dataUser.data
        };
        await panierService.create(itemPanier);
    };

    const recupDataPlats = async (idRest) => {
        const res = await platsRestaurantService.getListPlats(idRest);
        const data = res.data;
        await setPlats(data);
        console.log(data)
        await filterPlatCategory(data);
    };

    const addToFavori = async e => {
        const idRest = e.target.value;
        const userData = new Object(JSON.parse(user));
        const dataUser = await utilisateurService.get(userData.id);
        const favori = {
            favIdRes: idRest,
            fsUtilisateurByFavIdUtil: dataUser.data
        };
        await favorisService.create(favori);
    };
    
    useEffect( ()=>{
        recupDataRestaurant();
        recupAvis();
        recupHoraires();
    },[])

    return (
        <div className="mx-32">
            <div className="my-8">
                <SearchFormBar search={search}/>
            </div>
            <div className="flex">
                <SliderRestaurant slideData={slide} />
                <InformationsRestaurant addToFavori={addToFavori} horaires={horaires} restaurant={restaurant}/>
            </div>
            <div className="my-8">
                <div className="flex w-6/12 border-b-2 my-8">
                    <button className={nav === "avis" ? 'text-blue-500 font-bold' : 'text-black'} value="avis" onClick={navHandler}>Avis</button>
                    <div className="border-r-2 mx-8"></div>
                    <button className={nav === "carte" ? 'text-blue-500 font-bold' : 'text-black'} value="carte" onClick={navHandler}>Carte</button>

                </div>
                {nav === "avis" && <AvisRestaurant evaluations={evaluations}/>}
                {nav === "carte" && <CarteRestaurant user={user} addToPanier={addToPanier} entreesFilter={entreesFilter} platsFilter={platsFilter} dessertsFilter={dessertsFilter} boissonsFilter={boissonsFilter}/>}
            </div>
        </div>
    );
};

export default RestaurantDetail;