import React, {useState, useEffect} from 'react';
import { UserContext } from '../../contexts/userContext.js';
import './App.css';

import LoginPage from '../../pages/LoginPage.js';
import HomePage from '../../pages/HomePage.js';
import { logoutUser } from '../../api/auth.js';

import {
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import Navbar from '../Navbar/Navbar.js';
import CreatePage from '../../pages/CreatePage.js';
import AccountPage from '../../pages/AccountPage.js';


function App() {
  const [user, setUser] = useState(null);
  
  const isUserLoggedIn = () => {
    return !!user;
  }
  const logout = (event) => {
    event.preventDefault();
    logoutUser();
    setUser(null);
  }


  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const data = await fetch('http://127.0.0.1:8000/accounts');
      const accounts = await data.json();
      setAccounts(accounts);
    }
  
    fetchAccounts()
      .catch(console.error)
  }, []);


  console.log(accounts)
//   const history = useHistory();
 
//   useEffect(() => {
//   if (!isUserLoggedIn()) {
//     history.push('/login');
//   }
// }, [user, history]);
  
  /* referring to <UserContext.Provider value={{user, setUser, isUserLoggedIn}}> and other instances.
  * since the values are stored as variables in context, it's not necessary to escape the values for XSS-sake.
  */
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser, isUserLoggedIn}}>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path='/create-page'>
            <CreatePage />
          </Route>
          <Route exact path='/account-page/:id'>
            <AccountPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
