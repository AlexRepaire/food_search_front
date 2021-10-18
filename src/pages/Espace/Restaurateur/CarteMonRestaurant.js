import React, {useContext, useEffect, useState} from 'react';
import FormCarteRestaurant from "../../../components/Espace/Restaurateur/Carte/FormCarteRestaurant";
import TableauListPlats from "../../../components/Espace/Restaurateur/Carte/TableauListPlats";
import NavigationEspaceRestaurant from "./NavigationEspaceRestaurant";
import platsRestaurantService from "../../../services/platsRestaurantService";
import categoriePlatService from "../../../services/categoriePlatsService";
import restaurantService from "../../../services/restaurantService";
import AuthContext from "../../../store/auth-context";
import FormCarteUpdate from "../../../components/Espace/Restaurateur/Carte/FormCarteUpdate";

const CarteMonRestaurant = () => {
    const {user} = useContext(AuthContext);
    const [restaurant, setRestaurant] = useState({});
    const [listePlats, setListePlats] = useState([]);
    const [platSelectedToUpdate, setPlatSelectedToUpdate] = useState({});
    const [listePlatsFilter, setListePlatsFilter] = useState([]);
    const [categorie, setCategory] = useState([]);
    const [ajoutPlat, setAjoutPlat] = useState({
        prTitre:"",
        prPrix:"",
        prDescription:"",
        prPhoto:"",
        fsCategPlatsByPrIdCat:[],
        fsRestaurantByPrIdRes:"",
    });
    const [showModal, setShowModal] = React.useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const handleAjoutPlat = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAjoutPlat({...ajoutPlat, [name]: value})
    };

    const ajouterPlat = async () => {
        const userData = JSON.parse(user);
        const responseRestaurant = await restaurantService.getRestByIdUti(userData.id);
        const dataRestaurant = responseRestaurant.data;

        const plat = {...ajoutPlat,
            fsRestaurantByPrIdRes: dataRestaurant,
            fsCategPlatsByPrIdCat: categorie[ajoutPlat.fsCategPlatsByPrIdCat]
        };
        const dataCreateRes = await platsRestaurantService.create(plat);
        await recupDataPlat(dataRestaurant.restId);
    };

    const handlerUdpatePlat = ({currentTarget}) => {
          const { name, value } = currentTarget;
          setPlatSelectedToUpdate({...platSelectedToUpdate, [name]:value});
    };

    const updatePlat = async () => {
        const platUpdate = {...platSelectedToUpdate,
        fsCategPlatsByPrIdCat: categorie[platSelectedToUpdate.fsCategPlatsByPrIdCat] || categorie.find(item => item.cpId === platSelectedToUpdate.fsCategPlatsByPrIdCat.cpId)
        }
        await platsRestaurantService.update(platUpdate);
        await recupDataPlat(restaurant.restId);
        toggleShowModal();
    };

    const viewFormUpdate = (e) => {
        const valuePlat = e.target.value;
        const plat = listePlatsFilter.find(item => item.prId === parseInt(valuePlat));
        setPlatSelectedToUpdate(plat);
        toggleShowModal();
    };

    const supprimerPlat = async (e) => {
        const id = e.target.value;
        await platsRestaurantService.remove(id);
        await  recupDataPlat(restaurant.restId);
    };

    const recupDataRestaurant = async()=>{
        const userData = JSON.parse(user);
        const res = await restaurantService.getRestByIdUti(userData.id);
        const data = res.data;
        await setRestaurant(data);
        await recupDataPlat(data.restId);
    };

    const recupDataPlat = async(restId) => {
        const res = await platsRestaurantService.getListPlats(restId);
        const data = await res.data;
        await setListePlats(data);
        await setListePlatsFilter(data);
    };

    const recupDataCategoriePlat = async() => {
        const res = await categoriePlatService.getAll();
        const data = res.data;
        setCategory(data);
    };

    const handlePlatsFilter = e => {
          const valueFilter = e.target.value;
          if (valueFilter === "tout") {
              setListePlatsFilter(listePlats);
          } else {
              const dataFilter = listePlats.filter(item => item.fsCategPlatsByPrIdCat.cpType === valueFilter);
              setListePlatsFilter(dataFilter);
          }
    };

    useEffect(async () => {
        await recupDataRestaurant();
        await recupDataCategoriePlat();
    },[])

    return (
        <div className="text-center">
            <NavigationEspaceRestaurant/>
            <FormCarteRestaurant ajouterPlat={ajouterPlat} categoriePlat={categorie} handleAjoutPlat={handleAjoutPlat}/>
            {showModal ? <FormCarteUpdate toggleShowModal={toggleShowModal} updatePlat={updatePlat} categorie={categorie} platSelectedToUpdate={platSelectedToUpdate} handlerUdpatePlat={handlerUdpatePlat}/> : null}
            <h2 className="text-xl text-center uppercase font-bold">Liste des plats/boissons</h2>
            <TableauListPlats plats={listePlatsFilter} supprimerPlat={supprimerPlat} handlePlatsFilter={handlePlatsFilter} viewFormUpdate={viewFormUpdate}/>
        </div>
    );
};

export default CarteMonRestaurant;
