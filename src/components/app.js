import React, { Component } from 'react';
import moment from "moment";
import Logo from "../../static/assets/logo/dcclogosmall.jpg";

export default class App extends Component {
  render() {
    return (
      <div className='home-page-container'>
        <img src={Logo} alt="website-logo"/>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div> 
      </div>
    );
  }
}
