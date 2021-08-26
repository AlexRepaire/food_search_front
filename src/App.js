import './App.css';
import NavBar from "./pages/navBar/NavBar";
import {Fragment} from "react";
import Search from "./components/Search/Search";

function App() {
  return (
    <Fragment>
        <header>
            <NavBar />
            <Search/>
        </header>
    </Fragment>
  );
}

export default App;
