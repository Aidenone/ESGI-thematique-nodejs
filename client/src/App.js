import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from './containers/ToggleButtonContainer';
import ProfileBanner from "./containers/ProfileBanner";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import SecurityContainer from "./containers/SecurityContainer"
import MovieContainer from "./containers/MovieContainer"


class App extends Component {
  
  render() {
    
    const style = {
      maxHeight: 50,
      maxWidth: "100%"
    };

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ProfileBanner />
            <ToggleButtonContainer/>
            <BrowserRouter>
              <React.Fragment>
                <Link to="/security/login">Login</Link>
                <Link to="/movies">Movie List</Link>
                <Switch>
                  <Route path="/security" component={SecurityContainer} />
                  <Route path="/" component={ToggleButtonContainer} />
                  <Route path="/movies" component={MovieContainer} />
                </Switch>
              </React.Fragment>
            </BrowserRouter>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from './container/SecurityContainer';
import BakeryContainer from './container/BakeryContainer';

class App extends Component {

  render() {
    const styles= {
      maxHeight:50,   
      maxWidth: "100%"   
    }

    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={styles} />
          <p>
            Welcome to <code>Node Bakery</code>.
          </p>
                   
          <Link to="/security/login">Login</Link>
          <Link to="/bakery">Bakery List</Link>

          <Switch>
            <Route path="/bakery" component={BakeryContainer}/>              
            <Route path="/security" component={SecurityContainer}/>
            <Route path="/" component={SecurityContainer}/>              
          </Switch>
          
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
