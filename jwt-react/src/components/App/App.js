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
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/locations/')
        .then(res => res.json())
        .then(data => setLocations(data.locations))
}, [])

console.log(locations)

  return (
    <div className="App">
        <Navbar map={map}/>
        <Switch>
          <Route exact path="/">
            <HomePage map={map} setMap={setMap} locations={locations}/>
          </Route>
          <Route path="/create-page">
            <CreatePage map={map} locations={locations} setLocations={setLocations}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
