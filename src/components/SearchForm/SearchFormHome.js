import React, {useState} from 'react';
import styles from './SearchFormHome.module.css';
import Input from "../../UI/Input";
import ImageCover from "../../assets/coverSearchForm.png";
import FieldForm from "../../UI/FieldForm";

const SearchFormHome = () => {
    const [enteredQuoi, setEnteredQUoi] = useState();
    const [enteredOu, setEnteredOu] = useState();

    const quoiInputChangeHandler = e => {
        setEnteredQUoi(e.target.value);
    }

    const ouInputChangeHandler = e => {
        setEnteredOu(e.target.value);
    }

    const formSubmissionHandler = e => {
        e.preventDefault();

    }

    return (
        <div className={styles.cover} style={{backgroundImage: `url(${ImageCover})`}}>
            <form onSubmit={formSubmissionHandler} className="w-3/12">
                <h2 className="text-3xl text-center text-gray-700 mb-4">Rechercher un restaurant</h2>
                <FieldForm label="Quoi ?" placeholder="Nom restaurant" onChange={quoiInputChangeHandler}/>
                <FieldForm label="Où ?" placeholder="Ville" onCHange={ouInputChangeHandler}/>

                <div className="flex items-center justify-evenly">
                    <Input type="submit" className="btnPrimary">Chercher</Input>
                </div>
            </form>
        </div>
    );
};

export default SearchFormHome;