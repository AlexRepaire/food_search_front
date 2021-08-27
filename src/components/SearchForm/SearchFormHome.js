import React from 'react';
import Input from "../../UI/Input";

const SearchFormHome = () => {
    return (
        <div className="flex justify-center">
            <form>
                <div className="mb-4">
                    <label htmlFor="">Quoi ?</label>
                    <Input placeholder="Nom restaurant"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="">Où ?</label>
                    <Input placeholder="Ville"/>
                </div>
                <div className="flex items-center justify-evenly">
                    <button type="button">Chercher</button>
                </div>
            </form>
        </div>
    );
};

export default SearchFormHome;