import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/logo/dcclogosmall.jpg";



export default class NavigationComponent extends Component {
    constructor() {
        super();
    }




    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <img src={Logo} alt="website-logo"/>
                </div>

                <div className="right-side">
                    <div className="nav-link-wrapper">
                       <h2> <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></h2>
                    </div>

                    <div className="nav-link-wrapper">
                       <h2> <NavLink to="/abut-us" activeClassName="nav-link-active">About</NavLink> </h2>
                    </div>

                    <div className="nav-link-wrapper">   
                        <h2> <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink> </h2>
                    </div> 
                </div> 
            </div>
        )
    }
}


