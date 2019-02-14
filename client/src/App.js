import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from './container/SecurityContainer';
import BakeryContainer from './container/BakeryContainer';
import ProfileBanner from "./container/ProfilBanner";

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
          <ProfileBanner/>
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
