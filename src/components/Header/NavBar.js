import React, {useContext, useState} from 'react';
import styles from './navBar.module.css';
import LoginForm from "../LoginForm/LoginForm";
import {Link} from "react-router-dom";
import AuthContext from "../../store/auth-context";
import DropDownNavBar from "./DropDownNavBar";

const NavBar = () => {
    const auth = useContext(AuthContext);
    const [loginView, setLoginView] = useState(false);

    const toggleLoginViewHandler = () => {
        setLoginView(!loginView);
    };

    const viewLoginForm = loginView ? <LoginForm changeLoginView={toggleLoginViewHandler}/> : null;
    const viewNavBar = !auth.isLoggedIn
        ?
        <div>
            <button onClick={toggleLoginViewHandler} className={styles.button}>Connexion</button>
            <Link to="/inscription" className={styles.button}>Inscription</Link>
        </div>
        :
        <div>
            <DropDownNavBar logout={auth.logout}/>
        </div>

    return (
        <header>
            <nav className={styles.navBar}>
                <div>
                    <Link className="text-white flex" to="/">
                        <svg width="54" height="54" viewBox="0 0 54 54"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                        </svg>
                        <h1>FoodSearch</h1>
                    </Link>
                </div>
                <div>
                    {viewNavBar}
                </div>
            </nav>
            {viewLoginForm}
        </header>
    );
};

export default NavBar;