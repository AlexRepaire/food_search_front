import './App.css';
import NavBar from "./components/Header/NavBar";
import {Fragment} from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
        <NavBar />
        <Home />
        <Footer/>
    </Fragment>
  );
}

export default App;
