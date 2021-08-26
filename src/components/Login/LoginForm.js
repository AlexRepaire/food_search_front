import React from 'react';
import styles from './LoginForm.module.css';
import Input from "../../UI/Input";

const LoginForm = (props) => {

    return (
        <div className="flex justify-center">
            <form>
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
                    <button
                        className={styles.btnPrimary}
                        type="button">Connexion</button>
                    <button
                        className={styles.btnDanger}
                        onClick={props.changeLoginView}
                        type="button">Annuler</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;