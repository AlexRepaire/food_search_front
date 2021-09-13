import React, {Fragment} from 'react';
import {Link, Route} from "react-router-dom";

const Restaurant = () => {

    return (
        <Fragment>
            <h1>Liste des Restaurants cherchés</h1>
            <Route path="/restaurant" exact>
                <Link to={'/restaurant/comment'}>Load comment</Link>
            </Route>
            <Route path={`/restaurant/comment`}>
                <h1>Mon component comment resto</h1>
            </Route>
        </Fragment>
    );
};

export default Restaurant;