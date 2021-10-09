import React, {useState} from "react";

const RestContext = React.createContext({
    isValid: false,
    rest: "",
    restHandler: (id) => {}
});

export const RestConextProvider = (props) => {
    const [rest,setRest] = useState();
    const restIsValid = !!rest;

    const restHandler = (idRest) => {
        setRest(idRest);
    };

    const contextValue = {
        isValid: restIsValid,
        rest: rest,
        restHandler: restHandler
    }

    return <RestContext.Provider value={contextValue}>
        {props.children}
    </RestContext.Provider>
}

export default RestContext;