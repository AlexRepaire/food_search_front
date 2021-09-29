import React, {useState} from 'react';
import styles from './SearchFormHome.module.css';
import Input from "../../UI/Input";
import ImageCover from "../../assets/coverSearchForm.png";
import FieldForm from "../../UI/FieldForm";
import {useHistory} from "react-router-dom";

const SearchFormHome = () => {
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
        <div className={styles.cover} style={{backgroundImage: `url(${ImageCover})`}}>
            <form onSubmit={formSubmissionHandler} className="w-3/12">
                <h2 className="text-3xl text-center text-gray-700 mb-4">Rechercher un restaurant</h2>
                <FieldForm label="Quoi ?" placeholder="Nom restaurant" name="quoi" onChange={handleChange}/>
                <FieldForm label="Où ?" placeholder="Ville" value={search.ou} name="ou" onChange={handleChange}/>

                <div className="flex items-center justify-evenly">
                    <Input type="submit" className="btnPrimary" value="Rechercher">Chercher</Input>
                </div>
            </form>
        </div>
    );
};

export default SearchFormHome;