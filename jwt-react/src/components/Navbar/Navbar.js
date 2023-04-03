import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <h4>App</h4>
      <Searchbar />
      {/* <Link to='/create-page'>Create New Page</Link> */}
    </div>
  )
}

export default Navbar