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
import CreatePage from '../../pages/CreatePage';


function App() {
  const [map, setMap] = useState(null);
  return (
    <div className="App">
        <Navbar map={map}/>
        <Switch>
          <Route exact path="/">
            <HomePage map={map} setMap={setMap}/>
          </Route>
          <Route path="/create-page">
            <CreatePage map={map}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
