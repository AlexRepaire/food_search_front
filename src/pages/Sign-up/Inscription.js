import React, {useContext, useState} from 'react';
import FormRoleSignUp from "../../components/Sign-up/FormRoleSignUp";
import FormAdresseUtilisateurSignUp from "../../components/Sign-up/FormAdresseUtilisateurSignUp";
import FormUserSignUp from "../../components/Sign-up/FormUserSignUp";
import FormRestaurantSignUp from "../../components/Sign-up/FormRestaurantSignUp";
import FormAdresseRestaurantSignUp from "../../components/Sign-up/FormAdresseRestaurantSignUp";
import FormStepBar from "../../components/Sign-up/FormStepBar";
import adresseService from "../../services/adresseService";
import authService from "../../services/security/authService";
import AuthContext from "../../store/auth-context";
import {useHistory} from "react-router-dom";
import utilisateurService from "../../services/utilisateurService";
import fideliteService from "../../services/fideliteService";

const Inscription = () => {
    const auth  = useContext(AuthContext);
    let history = useHistory();

    const [role, setRole] = useState();
    const [adresse, setAdresse] = useState({
        adrNumero: '',
        adrRue: '',
        adrCplAdr: '',
        adrCp: '',
        adrVille: '',
        adrPays: ''
    })


    const [utilisateur, setUtilisateur] = useState({
        utiMail:'',
        utiMdp:'',
        utiDdn:'',
        utiNom:'',
        utiPrenom:'',
        utiTel:'',
        utiPseudo:'',
        fsAdresseByUtiId:'',
        fsRoleByUtiIdRol:'',
    });

    const [formIndex, setFormIndex] = useState(1);

    const setRoleHandler = data => {
        setRole(data);
    };

    const setAdresseHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setAdresse({...adresse, [name]: value})
    };

    const setUtilisateurHandler = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setUtilisateur({...utilisateur, [name]: value})
    };

    const inscriptionUtilisateur = async () => {
        const response = await adresseService.create(adresse);
        const data = await response.data;
        let user = {...utilisateur, fsAdresseByUtiId: data, fsRoleByUtiIdRol: role};
        authService.register(user)
            .then(res => {
                authService.login({
                    utiMail: user.utiMail,
                    utiMdp: user.utiMdp
                })
                    .then((response) => {
                        if (response.data.accessToken) {
                            const userData = {
                                'id': response.data.id,
                                'mail': response.data.email,
                                'role': response.data.roles[0].authority
                            }
                            auth.loginUser(userData, response.data.accessToken);
                            utilisateurService.get(response.data.id).then(res => {
                                const dataFidelite = {
                                    fidPtsFid: 50,
                                    fsUtilisateurByFidIdUtil: res.data
                                }
                                fideliteService.create(dataFidelite);
                            });

                        }
                        history.push("/home");
                    });
            })
            .catch(res => {
                adresseService.remove(data.adrId);
                alert(res);
            });
    };

    const modifyIndex = (index) => {
        setFormIndex(index);
    };

    const elements = [
        <FormRoleSignUp
            modifyIndex={modifyIndex}
            setRoleHandler={setRoleHandler}/>,
        <FormAdresseUtilisateurSignUp
            modifyIndex={modifyIndex}
            role={role}
            adresse={adresse}
            setAdresseHandler={setAdresseHandler}/>,
        <FormUserSignUp
            modifyIndex={modifyIndex}
            utilisateur={utilisateur}
            inscriptionUtilisateur={inscriptionUtilisateur}
            setUtilisateurHandler={setUtilisateurHandler}/>,
    ];

    const viewElements = elements.map((item, index) => {
        if ((index + 1) === formIndex) {
            return item;
        }
    });

    return (
        <div className="justify-center h-screen">
            <FormStepBar role={"utilisateur"} index={formIndex}/>
            {viewElements}
        </div>
    );
};

export default Inscription;
