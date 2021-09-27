import './App.css';
import NavBar from "./components/Header/NavBar";
import React, {Fragment, useContext, useState} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Restaurant from "./pages/Restaurant/Restaurant";
import Inscription from "./pages/Sign-up/Inscription";
import NotFound from "./pages/NotFound";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";
import NavigationEspaceAdmin from "./pages/Espace/Admin/NavigationEspaceAdmin";
import EspaceClient from "./pages/Espace/Client/EspaceClient";
import NavigationEspaceRestaurant from "./pages/Espace/Restaurateur/NavigationEspaceRestaurant";
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";

function App() {
    /*
    const { auth } = useContext(AuthContext);
    const role = auth.user.role;
    */

    /*
    Changer AuthenticatedRoute par Route pour coder sans authentification
     */

  return (
    <Fragment>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Redirect to='/home' />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/restaurant" component={Restaurant} exact/>
            <Route path="/restaurant/:id" component={RestaurantDetail} />
            <AuthenticatedRoute path="/espaceClient" component={EspaceClient}/>
            <AuthenticatedRoute path="/espaceAdmin" component={NavigationEspaceAdmin}/>
            <AuthenticatedRoute path="/espaceRestaurateur" component={NavigationEspaceRestaurant}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </Fragment>
  );
}

export default App;
