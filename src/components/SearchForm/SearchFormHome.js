import React, {useState} from 'react';
import styles from './SearchFormHome.module.css';
import Input from "../../UI/Input";
import ImageCover from "../../assets/coverSearchForm.png";

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
        console.log(enteredQuoi)
    }

    return (
        <div className={styles.cover} style={{backgroundImage: `url(${ImageCover})`}}>
            <form onSubmit={formSubmissionHandler} className="w-3/12">
                <div className="mb-4">
                    <label htmlFor="">Quoi ?</label>
                    <Input placeholder="Nom restaurant" onChange={quoiInputChangeHandler}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="">Où ?</label>
                    <Input placeholder="Ville" onCHange={ouInputChangeHandler}/>
                </div>
                <div className="flex items-center justify-evenly">
                    <Input type="submit" className="btnPrimary">Chercher</Input>
                </div>
            </form>
        </div>
    );
};

export default SearchFormHome;