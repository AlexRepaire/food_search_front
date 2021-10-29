import React, {useContext, useEffect, useState} from 'react';
import utilisateurService from "../../../services/utilisateurService";
import AuthContext from "../../../store/auth-context";
import panierService from "../../../services/panierService";
import Stripe from "react-stripe-checkout";
import axios from "axios";

const PanierComp = () => {

    const {user} = useContext(AuthContext);
    const [listePanier, setListePanier] = useState([
        {}
    ]);
    const [total,setTotal] = useState(0);

    const recupUti = async () => {
        const utilisateur = new Object(JSON.parse(user));
        const response = await panierService.findPanierByUti(utilisateur.id);
        const listPanier = await response.data;
        await setListePanier(listPanier)
        calculTotal(listPanier)
    };

    const calculTotal = (data) => {
        let montant=0;
        data.map(res => {
            const calculPrixArticle = res.panQuantite * res.panPrix;
            montant = montant + calculPrixArticle;
        })
        setTotal(montant)
    }

    const suppElemPanier = async(e) => {
        const id = e.target.value;
        await panierService.remove(id);
        await recupUti();
    };

    const updateQuantite = async(e) => {
        const nomButton = e.target.name;
        const idPanier = e.target.value;
        const response = listePanier.find(item => item.panId === parseInt(idPanier));
        if (nomButton === "incremente") {
            response.panQuantite ++;
        }
        if (nomButton === "decremente" && response.panQuantite > 0) {
            response.panQuantite --;
        }
        await panierService.update(response);
        await recupUti();
    }

    async function handleToken(token) {
        console.log(token);
        await axios.post("http://localhost:8080/api/payment/charge", "", {         headers: {
                token: token.id,
                amount: 500,
            },}).then(() => {
            alert("Payment Success");
        }).catch((error) => {
            alert(error);
        });
    }

    useEffect(async ()=>{
       await recupUti();
    },[]);

    return (
        <div className="h-screen bg-blend-luminosity">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-2 p-5">
                                    <h1 className="text-xl font-medium ">Panier</h1>
                                    {
                                        listePanier.map((res)=>{
                                            return(
                                                <div className="flex justify-between items-center mt-6 pt-6">
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col ml-3">
                                                            <span className="md:text-md font-medium">{res.panTitre}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <div className="pr-8 flex ">
                                                            <button className="font-semibold" value={res.panId} name="decremente" onClick={updateQuantite}>-</button>
                                                            <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={res.panQuantite}/>
                                                            <button className="font-semibold" value={res.panId} name="incremente" onClick={updateQuantite}>+</button>
                                                        </div>
                                                        <div className="pr-8 ">
                                                            <span className="text-xs font-medium">{res.panPrix}€</span>
                                                        </div>
                                                        <button className="btnDanger" value={res.panId} onClick={suppElemPanier}>X</button>
                                                        <div><i className="fa fa-close text-xs font-medium"></i></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                        <div className="flex justify-center items-end"><span
                                            className="text-sm font-medium text-gray-400 mr-1">Total:</span> <span
                                            className="text-lg font-bold text-gray-800 ">{total}</span>
                                        </div>
                                    </div>
                                    <Stripe
                                        stripeKey="pk_test_51Jpy87JSDuo2TuOyu7URw86FiyLQaGhYw0B1yM9ylRibDdbT9wf1xEhKCT92QYoTm2Nc3npiKE1otbUxGk83EGs300Em2P1OcK"
                                        token={handleToken}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanierComp;