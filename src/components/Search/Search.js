import React, {useState} from 'react';
import styles from './search.module.css';

const Search = () => {

    const Input = (props) => {
        return <input onChange={props.onChange} type={props.type} placeholder={props.name}/>
    }


    return (
        <div className="w-full max-w-xs">
            <form>
                <div className="mb-4">
                    <label htmlFor="">Mail</label>
                    <Input name="Mail"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="">Mot de passe</label>
                    <Input name="Mot de passe"/>
                    <a>Mot de passe oublié ?</a>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={styles.btnPrimary}
                        type="button">Connexion</button>
                    <button
                        className={styles.btnDanger}
                        type="button">Annuler</button>
                </div>
            </form>
        </div>
    );
};

export default Search;