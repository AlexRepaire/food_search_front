import React, {useContext, useEffect, useState} from 'react';
import Input from "../../UI/Input";
import authService from "../../services/security/authService";
import AuthContext from "../../store/auth-context";
import {addItem} from "../../services/LocalStorage/localeStorage";

const LoginForm = ({changeLoginView}) => {
    const { auth } = useContext(AuthContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({
        utiMail: "",
        utiMdp: ""
    });

    const handleChange = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setUser({...user, [name]: value})
    };
    /**
     * Form login a finir
     *
     * @param e
     */

    const formSubmissionHandler = e => {
        e.preventDefault();/*
        setIsLoaded(true);
        authService.login(user)
            .then((response) => {
                if (response.data.accessToken) {
                    //addItem("user", JSON.stringify(response.data));//
                    auth.login(response.data);
                }

                return response.data;
            });*/
        //setIsLoaded(false);
        //changeLoginView();
    }


    return (
        <div className="flex justify-center">
                <form onSubmit={formSubmissionHandler} className="absolute mt-32">
                    <h2 className="text-3xl text-center text-gray-700 mb-4">Connexion</h2>
                    {!isLoaded ?
                        <div className="px-12 pb-10">
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <Input name="utiMail" onChange={handleChange} type="email" placeholder="Mail"/>
                                </div>

                            </div>
                            <div className="w-full mb-2">
                                <Input name="utiMdp" onChange={handleChange} type="password"
                                       placeholder="Mot de passe"/>
                                <a href="">Mot de passe oublié ?</a>
                                <a href="" className="block">Pas de compte ?</a>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <Input
                                    type="submit"
                                    className="btnPrimary"
                                    value="connexion">Connexion</Input>
                                <button
                                    className="btnDanger"
                                    onClick={changeLoginView}>Annuler
                                </button>
                            </div>
                        </div>
                        :
                        <div className=" flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                        </div>
                    }
                </form>
        </div>
    );
};

export default LoginForm;