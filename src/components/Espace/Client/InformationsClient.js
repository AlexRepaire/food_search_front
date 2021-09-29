import React from 'react';
import imageTest from "../../../assets/client.jpg";

const InformationsClient = () => {

    const image = `bg-${imageTest}`;

    return (

            <div className="w-6/12">
                <h5 className="flex justify-center text-3xl font-normal leading-normal mt-0 mb-12">Information personnelle</h5>

                <div className="flex divide-gray-50">
                    <div className="flex items-start w-6/12">
                        <div className="px-16">
                            <div style={{backgroundImage: `url(${imageTest})`}} className={`rounded-full h-48 w-48  border-none`}>
                            </div>

                            <br/>
                            <div>
                                <button
                                    className="btnDanger"
                                    type="button">
                                    Supprimer son compte
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="space-y-6 w-6/12">
                        <p>Nom Prénom</p>
                        <p>Age</p>
                        <p>Mail</p>
                        <p>Points de fidélité</p>
                        <p>Numéro de tél</p>
                        <div>
                            <button
                                className="btnPrimary"
                                type="button">
                                Modifier mot de passe
                            </button>
                        </div>

                    </div>
                </div>
            </div>

    );
};

export default InformationsClient;