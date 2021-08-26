import React from 'react';
import  './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <h1>Téléchargez notre application</h1>
                <button>Aps Store</button>
                <button>Google Play</button>
            </div>
            <div>
                <a href="">A propos</a>
                <a href="">Contact</a>
                <a href="">Point de fidélités</a>
            </div>
            <div>
                <p>2021 FoodSearch</p>
                <p>TOUS DROITS RESERVES</p>
            </div>
        </footer>
    );
};

export default Footer;