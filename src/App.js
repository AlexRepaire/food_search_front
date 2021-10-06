import './App.css';
import NavBar from "./components/Header/NavBar";
import React, {Fragment} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Restaurant from "./pages/Restaurant/Restaurant";
import Inscription from "./pages/Sign-up/Inscription";
import NotFound from "./pages/NotFound";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";
import NavigationEspaceAdmin from "./pages/Espace/Admin/NavigationEspaceAdmin";
import NavigationEspaceRestaurant from "./pages/Espace/Restaurateur/NavigationEspaceRestaurant";
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import NavigationEspaceClient from "./pages/Espace/Client/NavigationEspaceClient";

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
            <AuthenticatedRoute path="/espaceClient" component={NavigationEspaceClient} roleRequired="ROLE_CLIENT"/>
            <AuthenticatedRoute path="/espaceAdmin" component={NavigationEspaceAdmin} roleRequired="ROLE_ADMIN"/>
            <AuthenticatedRoute path="/espaceRestaurateur" component={NavigationEspaceRestaurant} roleRequired="ROLE_RESTAURANT"/>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </Fragment>
  );
}

export default App;
