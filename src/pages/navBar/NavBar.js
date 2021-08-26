import React, {Fragment, useState} from 'react';
import styles from './navBar.module.css';
import LoginForm from "../../components/Login/LoginForm";

const NavBar = () => {
    const [loginView, setLoginView] = useState(false);

    const startLoginViewHandler = () => {
        setLoginView(true);
    }

    const cancelLoginViewHandler = () => {
        setLoginView(false);
    }

    const viewLogin = loginView ? <LoginForm changeLoginView={cancelLoginViewHandler}/> : null;

    return (
        <Fragment>
            <nav className={styles.navBar}>
                <div className="text-white flex">
                    <svg width="54" height="54" viewBox="0 0 54 54"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <h1>FoodSearch</h1>
                </div>
                <div>
                    <div>
                        <button onClick={startLoginViewHandler} className={styles.button}>Connexion</button>
                        <button className={styles.button}>Inscription</button>
                    </div>

                </div>
            </nav>
            {viewLogin}
        </Fragment>
    );
};

export default NavBar;