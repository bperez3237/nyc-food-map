import React from 'react'
import './Searchbar.css'
import {BiSearch} from 'react-icons/bi'

function Searchbar() {
  return (
    <div className='Searchbar'>
        <BiSearch />
        <input type='text' placeholder='Search' />
    </div>
  )
}

export default Searchbar;