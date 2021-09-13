import React, {useState} from 'react';
import Input from "../../UI/Input";
import Button from "../../UI/Button";



const LoginForm = (props) => {
    const [enteredMail, setEnteredMail] = useState();
    const [enteredPassword, setEnteredPassword] = useState();


    const mailInputChangeHandler = e => {
        setEnteredMail(e.target.value);
    }

    const passwordInputChangeHandler = e => {
        setEnteredPassword(e.target.value);
    }

    const formSubmissionHandler = e => {
        e.preventDefault();
        console.log();
    }


    return (
        <div className="flex justify-center">
            <form onSubmit={formSubmissionHandler} className="absolute">
                <h2 className="text-3xl text-center text-gray-700 mb-4">Connexion</h2>
                <div className="px-12 pb-10">
                    <div className="w-full mb-2">
                        <div className="flex items-center">
                            <Input onChange={mailInputChangeHandler} type="email" placeholder="Mail"/>
                        </div>

                    </div>
                    <div className="w-full mb-2">
                        <Input onChange={passwordInputChangeHandler} type="password" placeholder="Mot de passe"/>
                        <a href="" >Mot de passe oublié ?</a>
                        <a href="" className="block">Pas de compte ?</a>
                    </div>
                    <div className="flex items-center justify-evenly">
                        <Input
                            type="submit"
                            className="btnPrimary">Connexion</Input>
                        <Button
                            className="btnDanger"
                            onClick={props.changeLoginView}>Annuler</Button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;