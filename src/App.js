import './App.css';
import NavBar from "./components/Header/NavBar";
import React, {Fragment, useContext} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Restaurant from "./pages/Restaurant/Restaurant";
import Inscription from "./pages/Sign-up/Inscription";
import NotFound from "./pages/NotFound";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import Panier from "./pages/Espace/Client/Panier";
import EspaceClient from "./pages/Espace/Client/EspaceClient";
import MessageDetail from "./pages/Espace/Admin/MessageDetail";
import ListeCommentaires from "./pages/Espace/Admin/ListeCommentaires";
import CommentaireDetails from "./pages/Espace/Admin/CommentaireDetails";
import ContacterUtilisateur from "./pages/Espace/Admin/ContacterUtilisateur";
import ListeMessages from "./pages/Espace/Admin/ListeMessages";
import InformationMonRestaurant from "./pages/Espace/Restaurateur/InformationMonRestaurant";
import CarteMonRestaurant from "./pages/Espace/Restaurateur/CarteMonRestaurant";
import MenuMonRestaurant from "./pages/Espace/Restaurateur/MenuMonRestaurant";
import ListeCommandeMonRestaurant from "./pages/Espace/Restaurateur/ListeCommandeMonRestaurant";
import CommandeDetails from "./pages/Espace/Restaurateur/CommandeDetails";
import AuthContext from "./store/auth-context";
import {RestConextProvider} from "./store/rest-context";
import InscriptionRestaurant from "./pages/Sign-up/InscriptionRestaurant";
import Contact from "./pages/Contact";

function App() {
    const auth  = useContext(AuthContext);

  return (
    <Fragment>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Redirect to='/home' />
            </Route>
            <Route path="/home" component={Home} />
            {!auth.isLoggedIn &&
            <Route path="/inscription" component={Inscription} />
            }
            <Route path="/restaurant" component={Restaurant} exact/>
            <Route path="/restaurant/:id" component={RestaurantDetail} />
            <Route path="/contact" component={Contact}/>
            <AuthenticatedRoute exact path="/espaceClient" component={EspaceClient} roleRequired="ROLE_CLIENT"/>
            <AuthenticatedRoute path="/espaceClient/panier" component={Panier} roleRequired="ROLE_CLIENT"/>

            <AuthenticatedRoute exact path="/espaceAdmin" component={ListeMessages} roleRequired="ROLE_ADMIN"/>
            <AuthenticatedRoute exact path="/espaceAdmin/message/:id" component={MessageDetail} roleRequired="ROLE_ADMIN"/>
            <AuthenticatedRoute exact path="/espaceAdmin/ListeCommentairesParRestaurant" component={ListeCommentaires} roleRequired="ROLE_ADMIN"/>
            <AuthenticatedRoute path="/espaceAdmin/ListeCommentairesParRestaurant/:id" component={CommentaireDetails} roleRequired="ROLE_ADMIN"/>
            <AuthenticatedRoute path="/espaceAdmin/ContacterUtilisateur" component={ContacterUtilisateur} roleRequired="ROLE_ADMIN"/>

            <RestConextProvider>
                <AuthenticatedRoute exact path="/espaceRestaurateur" component={InformationMonRestaurant} roleRequired="ROLE_RESTAURANT"/>
                <AuthenticatedRoute path="/inscriptionRestaurant" component={InscriptionRestaurant} roleRequired="ROLE_RESTAURANT"/>
                <AuthenticatedRoute path="/espaceRestaurateur/carte" component={CarteMonRestaurant} roleRequired="ROLE_RESTAURANT"/>
                <AuthenticatedRoute path="/espaceRestaurateur/menu" component={MenuMonRestaurant} roleRequired="ROLE_RESTAURANT"/>
                <AuthenticatedRoute exact path="/espaceRestaurateur/commandes" component={ListeCommandeMonRestaurant} roleRequired="ROLE_RESTAURANT"/>
                <AuthenticatedRoute path="/espaceRestaurateur/commandes/:id" component={CommandeDetails} roleRequired="ROLE_RESTAURANT"/>
            </RestConextProvider>

            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </Fragment>
  );
}

export default App;
