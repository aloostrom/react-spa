import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Buy from "./Buy";
import Sell from "./Sell";
import About from "./About";
import carShelby from "./carShelby";
import car8er from "./car8er";
import carFusion from "./carFusion";
import carRav4 from "./carRav4";
import carSilverado from "./carSilverado";
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Carvana</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Buy">Buy</NavLink></li>
                    <li><NavLink to="/Sell">Sell</NavLink></li>
                    <li><NavLink to="/About">About Us</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Buy" component={Buy}/>
                    <Route path="/Sell" component={Sell}/>
                    <Route path="/About" component={About}/>
                    <Route path="/carShelby" component={carShelby}/>
                    <Route path="/car8er" component={car8er}/>
                    <Route path="/carFusion" component={carFusion}/>
                    <Route path="/carRav4" component={carRav4}/>
                    <Route path="/carSilverado" component={carSilverado}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;