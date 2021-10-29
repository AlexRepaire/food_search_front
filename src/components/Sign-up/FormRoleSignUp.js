import React from 'react';
import imageRestaurant from "../../assets/restaurant.png";
import imageClient from "../../assets/client.jpg";


const FormRoleSignUp = (props) => {

    const roleHandler = (e) => {
        props.setRoleHandler(e.target.value);
        props.modifyIndex(2);
    };

    return (
        <div className="mt-40 ">
            <div className="text-center mb-16">
                <h1>Bienvenue sur FoodSearch</h1>
                <h2>Ne perd pas plus de temps et inscrit toi!</h2>
            </div>
            <div className="flex justify-center ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10">
                    <img className="w-full" src={imageRestaurant} alt="restaurant" />
                    <div className="px-6 py-4 text-center">
                        <button className="btnPrimary" value="restaurant" onClick={roleHandler}>Inscription restaurant</button>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10">
                    <img className="w-full h-60" src={imageClient} alt="client" />
                    <div className="px-6 py-4 text-center">
                        <button className="btnPrimary" value="client" onClick={roleHandler}>Inscription client</button>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10">
                    <img className="w-full h-60" src={imageClient} alt="client" />
                    <div className="px-6 py-4 text-center">
                        <button className="btnPrimary" value="admin" onClick={roleHandler}>Inscription admin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormRoleSignUp;