import './App.css';
import NavBar from "./components/Header/NavBar";
import {Fragment, useContext, useState} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Restaurant from "./pages/Restaurant/Restaurant";
import Inscription from "./pages/Sign-up/Inscription";
import NotFound from "./pages/NotFound";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";
import EspaceAdmin from "./pages/Espace/Admin/EspaceAdmin";
import EspaceClient from "./pages/Espace/Client/EspaceClient";
import EspaceRestaurateur from "./pages/Espace/Restaurateur/EspaceRestaurateur";
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";


function App() {

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
            <AuthenticatedRoute path="/espaceAdmin" component={EspaceAdmin}/>
            <AuthenticatedRoute path="/espaceRestaurateur" component={EspaceRestaurateur}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </Fragment>
  );
}

export default App;
