import React from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import ImageCover from "../../assets/coverSearchForm.png";

const SearchFormHome = () => {
    return (
        <div className="flex justify-center bg-cover bg-center h-80" style={{backgroundImage: `url(${ImageCover})`}}>
            <form className="w-3/12">
                <div className="mb-4">
                    <label htmlFor="">Quoi ?</label>
                    <Input placeholder="Nom restaurant"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="">Où ?</label>
                    <Input placeholder="Ville"/>
                </div>
                <div className="flex items-center justify-evenly">
                    <Button color="blue">Chercher</Button>
                </div>
            </form>
        </div>
    );
};

export default SearchFormHome;