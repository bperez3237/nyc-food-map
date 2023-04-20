import React, { useState, useEffect } from "react";
import "./App.css";

import HomePage from "../../pages/HomePage.js";

import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import CreatePage from "../../pages/CreatePage";

function App() {
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data.foods));

    fetch("http://127.0.0.1:8000/locations/")
      .then((res) => res.json())
      .then((data) => setLocations(data.locations));
  }, []);

  console.log(locations);

  return (
    <div className="App">
      <Navbar map={map} />
      <Switch>
        <Route exact path="/">
          {locations.length === 0 || foods.length === 0 ? (
            <div className="loading">
              <h1>Loading</h1>
            </div>
          ) : (
            <HomePage
              map={map}
              setMap={setMap}
              locations={locations}
              foods={foods}
            />
          )}
        </Route>
        <Route path="/create-page">
          <CreatePage
            map={map}
            locations={locations}
            setLocations={setLocations}
          />
        </Route>
        <Route path="/add-price"></Route>
      </Switch>
    </div>
  );
}

export default App;
