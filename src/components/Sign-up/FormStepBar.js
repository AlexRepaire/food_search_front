import React, {Fragment} from 'react';

const FormStepBar = ({index, role}) => {

    const barUser = role === "client" ?
        <div className="grid grid-cols-3 gap-3 mt-20 w-2/4 m-auto">
            <div className={`border-t-4 ${index > 1 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 1 ? 'text-blue-500' : ""} font-bold`}>Etape 1</p>

                <p className="font-semibold">Role Select</p>
            </div>
            <div className={`border-t-4 ${index > 1 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 1 ? 'text-blue-500' : ""} font-bold`}>Etape 2</p>

                <p className="font-semibold">Adresse utilisateur</p>
            </div>
            <div className={`border-t-4 ${index > 2 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 2 ? 'text-blue-500' : ""} font-bold`}>Etape 3</p>

                <p className="font-semibold">Infos utilisateur</p>
            </div>
        </div>
        :
        <div className="grid grid-cols-5 gap-5 mt-20 w-2/4 m-auto">
            <div className={`border-t-4 ${index > 1 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 1 ? 'text-blue-500' : ""}  font-bold`}>Etape 1</p>

                <p className="font-semibold">Role Select</p>
            </div>
            <div className={`border-t-4 ${index > 1 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 1 ? 'text-blue-500' : ""} font-bold`}>Etape 2</p>

                <p className="font-semibold">Adresse Gérant</p>
            </div>
            <div className={`border-t-4 ${index > 2 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 2 ? 'text-blue-500' : ""} font-bold`}>Etape 3</p>

                <p className="font-semibold">Infos gérant</p>
            </div>
            <div className={`border-t-4 ${index > 3 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 3 ? 'text-blue-500' : ""} font-bold`}>Etape 4</p>

                <p className="font-semibold">Adresse du restaurant</p>
            </div>
            <div className={`border-t-4 ${index > 4 ? 'border-blue-500' : ""} pt-4`}>
                <p className={`uppercase ${index > 4 ? 'text-blue-500' : ""} font-bold`}>Etape 5</p>

                <p className="font-semibold">Infos Gérant</p>
            </div>
        </div>;

    return (
        <Fragment>
            {barUser}
        </Fragment>
    );
};

export default FormStepBar;