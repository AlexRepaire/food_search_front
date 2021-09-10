import './App.css';
import NavBar from "./components/Header/NavBar";
import {Fragment} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Restaurant from "./pages/Restaurant/Restaurant";
import Inscription from "./pages/Sign-up/Inscription";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Fragment>
        <NavBar />
        <Switch>
            <Route path="/"  exact>
                <Redirect to='/home' />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/restaurant" component={Restaurant} exact />
            <Route path="*" component={NotFound}/>

        </Switch>
        <Footer/>
    </Fragment>
  );
}

export default App;
