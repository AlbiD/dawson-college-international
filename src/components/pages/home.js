import React from "react";
import Logo from "../../../static/assets/logo/dcclogosmall.jpg";
// import PortfolioContainer from "../portfolio/portfolio-container";


export default function() {
    return (
        <div className="backgrond-image">
          <div className="home-logo">
            <img src={Logo} alt="website-logo"/>
          </div>
            {/* <PortfolioContainer/> */}
        </div>
    );
}