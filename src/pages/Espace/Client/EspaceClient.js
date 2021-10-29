import React, {useContext, useEffect, useState} from 'react';
import InformationsClient from "../../../components/Espace/Client/InformationsClient";
import ListFavoris from "../../../components/Espace/Client/ListFavoris";
import HistoriquesCommande from "../../../components/Espace/Client/HistoriquesCommande";
import NavigationEspaceClient from "./NavigationEspaceClient";
import AuthContext from "../../../store/auth-context";
import utilisateurService from "../../../services/utilisateurService";
import restaurantService from "../../../services/restaurantService";
import EvaluationForm from "../../../components/Espace/Client/EvaluationForm";
import horaireService from "../../../services/horaireService";
import evaluationService from "../../../services/evaluationService";
import commandeService from "../../../services/commandeService";
import UpdateClientForm from "../../../components/Espace/Client/UpdateClientForm";
import favorisService from "../../../services/favorisService";


const EspaceClient = () => {

    const [userData, setUserData] = useState({
        utiNom : '',
        utiPrenom : '',
        utiDdn : '',
        utiMail : '',
        utiTel : '',
        fsFidelitesByUtiId : {
            fidPtsFid : ''
        },
        fsFavorisesByUtiId : [{
            favIdRes : ''
        }]
    });
    const [userDataUpdated, setUserDataUpdated] = useState({});
    const [dataFav , setDataFav] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalFormUser, setShowModalFormUser] = useState(false);
    const {user} = useContext(AuthContext);
    const [evaluation, setEvaluation] = useState({
        evaNote : '',
        evaDate : '',
        evaCommentaire : '',
    });
    const [commandeSelected, setCommandeSelected] = useState({});

    const handleChangeEvaluation = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setEvaluation({...evaluation, [name]: value})
    };

    const handleChangeUpdateClient = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setUserDataUpdated({...userDataUpdated, [name]: value})
    };

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const toggleShowModalUpdateUser = () => {
        setShowModalFormUser(!showModalFormUser);
    }

    const showFormEvaluation = (data) => {
        setCommandeSelected(data)
        toggleShowModal();
    };

    const valideEvalForm = async(e) => {
        e.preventDefault();
        const res = await evaluationService.createAndReturn(evaluation);
        const data = res.data;
        const commandeUpdated = {...commandeSelected};
        commandeUpdated.fsEvaluationByCmdIdEva = data;
        await commandeService.update(commandeUpdated);
        await toggleShowModal();
    };

    const formValideUpdateClient = async (e) => {
        e.preventDefault();
       await utilisateurService.update(userDataUpdated);
       await recupDonnee();
       await toggleShowModalUpdateUser();
    };

    const recupDonnee = async() => {
        const utilisateur = new Object(JSON.parse(user));
        const res = await utilisateurService.get(utilisateur.id);
        const data = res.data;
        await setUserData(data);
        await setUserDataUpdated(data);
        console.log(data)
    }

    const recupFav = async (data) => {
        const utilisateur = new Object(JSON.parse(user));
        const datasFavori = await favorisService.getListByIdUti(utilisateur.id);
        await datasFavori.data.map(async(res)=>{
            const response = await restaurantService.get(res.favIdRes);
            console.log(response)
            await setDataFav([...dataFav, response.data]);
        })
    }

    useEffect(async() =>{
        await recupDonnee();
        await recupFav();
    },[])

    return (
        <div >
            <NavigationEspaceClient/>
            <h1 className="text-center pb-4 font-bold">Espace Client</h1>
            <div className="flex w-full">
                <InformationsClient userDatas = {userData} toggleShowModalUpdateUser={toggleShowModalUpdateUser} />
                <div className="border-l-2"></div>
                <ListFavoris datasFav = {dataFav}/>
            </div>
            {showModal && <EvaluationForm valideEvalForm={valideEvalForm} toggleShowModal={toggleShowModal} handleChangeEvaluation={handleChangeEvaluation}/>}
            {showModalFormUser && <UpdateClientForm toggleShowModalUpdateUser={toggleShowModalUpdateUser} handleChangeUpdateClient={handleChangeUpdateClient} formValideUpdateClient={formValideUpdateClient} userDataUpdated={userDataUpdated}/>}
            <HistoriquesCommande showFormEvaluation={showFormEvaluation}/>
        </div>

    );
};

export default EspaceClient;