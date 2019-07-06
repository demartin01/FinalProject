import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import MainNavbar from "./components/Navbar";
import Search from "./components/Search"
import Home from "./pages/Home";
import Snapshot from "./pages/Snapshot";
import Favorites from "./pages/Favorites";

const App = () => {
    return (
      <div className="App">
        <MainNavbar />
        <Router >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/snapshot" component={Snapshot} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
