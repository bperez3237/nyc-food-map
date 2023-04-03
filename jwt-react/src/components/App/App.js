import React, {useState, useEffect} from 'react';
import './App.css';

import HomePage from '../../pages/HomePage.js';

import {
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import Navbar from '../Navbar/Navbar.js';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
