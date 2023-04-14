import React, {useState} from 'react'
import './Searchbar.css'
import {BiSearch} from 'react-icons/bi'
import {BsArrow90DegRight} from 'react-icons/bs'

function Searchbar({ map }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMarker, setCurrentMarker] = useState(null);

  function inNYC(address) {
    return address.some(name => [
      'Kings County',
      'Manhattan',
      'Queens County',
      'Bronx County',
      'Richmond County',
    ].includes(name.long_name));
  }


  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Create a new geocoder object
    const geocoder = new window.google.maps.Geocoder();
    if (!searchQuery) {
      return
    }
    // Use the geocoder to get the geographic coordinates of the search query
    geocoder.geocode({ address: searchQuery }, (results, status) => {

      if (status === 'OK' && inNYC(results[0].address_components)) {
        // Get the latitude and longitude of the first result
        // console.log(results[0].geometry.viewport)
        // Ha for lat and Va for long on windows pc
        const lat = (results[0].geometry.viewport.Va.lo + results[0].geometry.viewport.Va.hi) / 2;
        const lng = (results[0].geometry.viewport.Ha.lo + results[0].geometry.viewport.Ha.hi) / 2;

        // Create a new marker for the search result
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: results[0].formatted_address,
        });

        if (currentMarker) {
          currentMarker.setMap(null);
        }

        setCurrentMarker(marker);
        // Pan the map to the search result
        map.panTo({ lat, lng });
      } else {
        // Handle the geocoding error
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearchSubmit} className='Searchbar'>
      <BiSearch />
      <input type='text' placeholder='Search Map' value={searchQuery} onChange={handleSearchChange} />
      <button className='search-button' type='submit'><BsArrow90DegRight /></button>

    </form>
  );
}

export default Searchbar;
