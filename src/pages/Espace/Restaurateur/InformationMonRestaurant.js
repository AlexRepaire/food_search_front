import React, {useCallback, useContext, useEffect, useState} from 'react';
import InformationsRestaurant from "../../../components/Espace/Restaurateur/Infos/InformationsRestaurant";
import SliderRestaurant from "../../../components/Restaurant/SliderRestaurant";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import restaurantService from "../../../services/restaurantService";
import AuthContext from "../../../store/auth-context";
import {useHistory} from "react-router-dom";
import horaireService from "../../../services/horaireService";
import HorairesForm from "../../../components/Espace/Restaurateur/Infos/HorairesForm";
import HoraireUpdateForm from "../../../components/Espace/Restaurateur/Infos/HoraireUpdateForm";

const InformationMonRestaurant = () => {
    const {user} = useContext(AuthContext);
    let history = useHistory();

    const [viewData, setViewData] = useState({
        fsSpecialiteByRestIdSpe: {speId: '', speType: ''},
        fsUtilisateurByRestIdUti: {utiId: '', utiNom: '', utiPrenom: '', utiTel: '', utiPseudo: ''},
        fsAdresseByRestId: {adrCp: '',
            adrCplAdr: "",
            adrId: '',
            adrNumero: '',
            adrPays: "",
            adrRue: "",
            adrVille: ""},
        restIban: "",
        restId: '',
        restNom: "",
        restSiret: "",
        restTel: ""
    });
    const [horaires,setHoraires] = useState([
        {
            id:'',
            ouvertureMatin:'',
            fermetureMatin:'',
            ouvertureApresMidi:'',
            fermetureApresMidi:'',
            ouvert:'',
            jour:'',
            fsRestaurantByHoraireIdRes:{}
        }
    ]);
    const [addHoraire,setAddHoraire] = useState({
        ouvertureMatin:'',
        fermetureMatin:'',
        ouvertureApresMidi:'',
        fermetureApresMidi:'',
        ouvert:'',
        jour:'',
        fsRestaurantByHoraireIdRes:{}
    })
    const [semaine, setSemaine] = useState(["choisir un jour", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"])
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [horraireSelectedToUpdate, setHorraireSelectedToUpdate] = useState({
        id:'',
        ouvertureMatin:'',
        fermetureMatin:'',
        ouvertureApresMidi:'',
        fermetureApresMidi:'',
        ouvert:'',
        jour:'',
        fsRestaurantByHoraireIdRes:{}
    });

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const toggleShowModalUpdate = () => {
        setShowModalUpdate(!showModalUpdate);
    };

    const viewFormUpdate = (e) => {
        const valuePlat = e.target.value;
        const data = horaires.find(item => item.id === parseInt(valuePlat));
        setHorraireSelectedToUpdate(data);
        toggleShowModalUpdate();
    };

    const handleChangeHoraire = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAddHoraire({...addHoraire, [name]: value})
    };

    const handleChangeHoraireUpdate = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setHorraireSelectedToUpdate({...horraireSelectedToUpdate, [name]: value})
        console.log(value)
    };

    const handleChangeHoraireOuverture = ({currentTarget}) => {
        let { name, value} = currentTarget;
        const data = {...addHoraire};
        if (value === "true"){
            data.ouvert = true;
        }
        if (value === "false"){
            data.ouvert = false;
        }
        setAddHoraire(data)
    };

    const handleChangeHoraireOuvertureUpdateForm = ({currentTarget}) => {
        let { name, value} = currentTarget;
        const data = {...horraireSelectedToUpdate};
        if (value === "true"){
            data.ouvert = true;
        }
        if (value === "false"){
            data.ouvert = false;
        }
        setHorraireSelectedToUpdate(data)
    };

    const validerHoraireForm = async (e) => {
        e.preventDefault();
        const data = addHoraire;
        data.fsRestaurantByHoraireIdRes = viewData;
        console.log(data)
        if (data.ouvert === false) {
            data.fermetureApresMidi = null;
            data.fermetureMatin = null;
            data.ouvertureApresMidi = null;
            data.ouvertureMatin = null;
        }
        await horaireService.create(data);
        await recupHoraire(viewData.restId);
    };

    const validerHoraireUpdateForm = async (e) => {
        e.preventDefault();
        await horaireService.update(horraireSelectedToUpdate);
        await recupHoraire(viewData.restId);
    };

    const deleteHoraire = async (e) => {
        await horaireService.remove(e.target.value);
        await recupHoraire(viewData.restId);
    };

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

    const recupDataRest = useCallback(async () => {
        const userData = new Object(JSON.parse(user));
        const res = await restaurantService.getRestByIdUti(userData.id);
        const data = res.data;

        if (data === '') {
            history.push("/inscriptionRestaurant");
        }
        return data
    },[]);

    const recupHoraire = async (rest) => {
        const res = await horaireService.getListHoraireByRest(rest) ;
        const data = res.data;
        await setHoraires(data);
    };

    useEffect(  async ()=>{
        const dataRest = await recupDataRest();
        setViewData(dataRest);
        await recupHoraire(dataRest.restId)
    },[recupDataRest])

    return (
        <div className="lg:mx-32 sm:mx-0">
            <NavigationEspaceRestaurant/>
            <div className="md:flex mt-8">
                <InformationsRestaurant viewFormUpdate={viewFormUpdate} toggleShowModalUpdate={toggleShowModalUpdate} deleteHoraire={deleteHoraire} toggleShowModal={toggleShowModal} horaires={horaires} dataRestaurant={viewData} dataAdresse={viewData.fsAdresseByRestId}/>
                {showModal && <HorairesForm validerHoraireForm={validerHoraireForm} handleChangeHoraireOuverture={handleChangeHoraireOuverture} handleChangeHoraire={handleChangeHoraire} addHoraire={addHoraire} semaine={semaine} toggleShowModal={toggleShowModal}/>}
                {showModalUpdate && <HoraireUpdateForm handleChangeHoraireOuvertureUpdateForm={handleChangeHoraireOuvertureUpdateForm} validerHoraireUpdateForm={validerHoraireUpdateForm} handleChangeHoraireUpdate={handleChangeHoraireUpdate} semaine={semaine} horraireSelectedToUpdate={horraireSelectedToUpdate} toggleShowModalUpdate={toggleShowModalUpdate}/>}
                <SliderRestaurant slideData={slide}/>
            </div>
        </div>
    );
};

export default InformationMonRestaurant;
