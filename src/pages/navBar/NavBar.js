import React, {useState} from 'react';
import styles from './navBar.module.css';

const NavBar = () => {
    const [login, setLogin] = useState(false);

    const handleChangeLogin = () => {
        setLogin(true);
    }

    return (
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
                    <button onClick={handleChangeLogin} className={styles.button}>Connexion</button>
                    <a href="" className={styles.button}>Inscription</a>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;