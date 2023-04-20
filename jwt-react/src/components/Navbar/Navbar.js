import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ map }) {
  return (
    <div className="Navbar">
      <Link id="app-name" to="/">
        NYC Food Map
      </Link>
      <Searchbar map={map} />
      <Link id="create" to="/create-page">
        Create New Page
      </Link>
      <Link id="create" to="/add-page">
        Add Price
      </Link>
    </div>
  );
}

export default Navbar;
