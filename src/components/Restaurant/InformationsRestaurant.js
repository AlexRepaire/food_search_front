import React from 'react';

const InformationsRestaurant = ({restaurant, horaires, addToFavori}) => {
    return (
        <div className="w-6/12 mx-8">
            <div className="mb-4 flex">
                <div>
                    <h1 className="mb-4">{restaurant.restNom}</h1>
                    <h2>{restaurant.fsSpecialiteByRestIdSpe.speType}</h2>
                    <p>{restaurant.fsAdresseByRestId.adrCplAdr}</p>
                    <p>{restaurant.fsAdresseByRestId.adrCp} {restaurant.fsAdresseByRestId.adrVille}</p>
                    <h2>{restaurant.restTel}</h2>
                </div>
                <div>
                    <button className="btnPrimary" value={restaurant.restId} onClick={addToFavori}>favoris</button>
                </div>
            </div>
            <h1>Horaires</h1>
            <div className="flex">
                <div>
                    <ul>
                        {horaires.map((res,index) => {
                            const dataOuvert = res.ouvert ? <li>{res.jour}: {res.ouvertureMatin} - {res.fermetureMatin} | {res.ouvertureApresMidi} - {res.fermetureApresMidi}</li>:null;
                            const dataFermeture = !res.ouvert && <li>{res.jour}: Fermé</li>;
                            return <div>{dataOuvert} {dataFermeture}</div>
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default InformationsRestaurant;