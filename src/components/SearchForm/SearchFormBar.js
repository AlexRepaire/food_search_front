import React, {Fragment, useState} from 'react';
import {useHistory} from "react-router-dom";
import ImageCover from "../../assets/coverSearchForm.png";
import FieldForm from "../../UI/FieldForm";
import Input from "../../UI/Input";

const SearchFormBar = () => {
    let history = useHistory();

    const [search, setSearch] = useState({
        quoi: "",
        ou: "Valenciennes"
    });

    const handleChange = ({currentTarget}) => {
        const { name, value} = currentTarget;
        setSearch({...search, [name]: value})
    };

    const formSubmissionHandler = e => {
        e.preventDefault();
        history.push(`/restaurant?quoi=${search.quoi}&ou=${search.ou}`);
    }

    return (
        <Fragment>
            <form className="flex w-9/12 shadow-none bg-white" onSubmit={formSubmissionHandler}>
                <div className="w-full">
                    <label>Quoi ?</label>
                    <Input onChange={handleChange} name={"quoi"}  type="text" placeholder="Quoi ?"/>
                </div>
                <div className="w-full">
                    <label>Ou ?</label>
                    <Input onChange={handleChange} name={"ou"}  value={search.ou} type="text" placeholder="Ou ?"/>
                </div>
                <div className="flex items-end pl-2">
                    <Input type="submit" className="btnPrimary" value="Rechercher">Chercher</Input>
                </div>
            </form>
        </Fragment>
    );
};

export default SearchFormBar;