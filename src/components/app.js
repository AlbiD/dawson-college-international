import React, { Component } from 'react';
import Logo from "../../static/assets/logo/dcclogosmall.jpg";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from './pages/home';
import About from './pages/about';
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (

    <div>
          <div>

            <Router>
              <div>
                 <NavigationContainer />
                 
                 <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/abut-us" component={About} />
                   <Route path="/contact" component={Contact} />
                   <Route component={NoMatch} />
                 </Switch>
              </div>
            </Router>

            
          </div>

          <div className="backgrond-image"></div>

          <div className="footer">

                <div className="phone">
                <i class="fas fa-phone-volume"></i>
                    406 377 9400
                </div>
                
                <img src={Logo} alt="footer-logo"/>

                <div className="adress">
                  300 College Drive Glendive MT 59330
                  <i class="fas fa-map-marker-alt"></i>
                </div>
          </div>
          <div className="footer-social-media">

            <a href="https://www.instagram.com/dawsonbuccaneers/?hl=en">
                  <i class="fab fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/DCCBuccaneers">
                  <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          
          <div className="copy-writer">
                  &copy; Albi 2019 &#124; All rights reserved
          </div>
    </div>
    );
  }
}
