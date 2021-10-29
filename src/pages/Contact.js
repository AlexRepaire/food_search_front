import React, {useContext, useEffect, useState} from 'react';
import FieldForm from "../UI/FieldForm";
import AuthContext from "../store/auth-context";
import utilisateurService from "../services/utilisateurService";
import messageService from "../services/messageService";

const Contact = () => {
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState({
        msgMessage:'',
        msgDate:'',
        fsUtilisateurByMsgIdUti: {}
    });

    const recupUser = async() => {
        const userCtx = new Object(JSON.parse(user))
        const res = await utilisateurService.get(userCtx.id)
        const data = res.data;
        await setUserData(data);
    };

    const handleMessage = async e => {
        const msg = e.target.value;
        const data = {...message, msgMessage: msg}
        await setMessage(data);
    };

    const sendMessageForm = async(e) => {
        e.preventDefault();
        const data = {...message,
        fsUtilisateurByMsgIdUti: userData,
        msgDate: new Date()
        }
        await messageService.create(data);
    };

    useEffect(()=>{
        recupUser();
    },[])

    return (
        <div>
            <form onSubmit={sendMessageForm}>
                <FieldForm label="Message" type="text" onChange={handleMessage}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Contact;