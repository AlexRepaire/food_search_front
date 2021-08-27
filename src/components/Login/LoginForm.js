import React from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const LoginForm = (props) => {

    return (
        <div className="flex justify-center">
            <form className="absolute">
                <div className="mb-4">
                    <label htmlFor="">Mail</label>
                    <Input placeholder="Mail"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="">Mot de passe</label>
                    <Input type="password" placeholder="Mot de passe"/>
                    <a href="" >Mot de passe oublié ?</a>
                    <a href="" className="block">Pas de compte ?</a>
                </div>
                <div className="flex items-center justify-evenly">
                    <Button
                        color="blue">Connexion</Button>
                    <Button
                        color="red"
                        onClick={props.changeLoginView}>Annuler</Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;