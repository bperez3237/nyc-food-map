import React, {useState, useEffect} from 'react'

function LocationForm() {
    const [address, setAddress] = useState('')
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/locations/')
            .then(res => res.json())
            .then(data => setLocations(data.locations))
    }, [])

    const locationElements = locations ? locations.map(location => {
        return (
            <div key={location.id}>
                <h3>{location.address}</h3>
                <p>{location.entry_date}</p>
                <p>{location.lat}</p>
                <p>{location.lng}</p>
            </div>
        )
    }) : []

    const handleSubmit = (e) => {
        e.preventDefault()

        function inNYC(address) {
            return address.some(name => [
            'Kings County',
            'Manhattan',
            'Queens County',
            'Bronx County',
            'Richmond County',
            ].includes(name.long_name));
        }
        const geocoder = new window.google.maps.Geocoder();
        if (!address) {
            return
        }
        geocoder.geocode({ address: address }, (results, status) => {
 
            if (status !== 'OK') {
                console.log('Geocode was not successful for the following reason:', status);
            }
            else if (!inNYC(results[0].address_components)) {
                console.log('Address is not in NYC')
            }
            else {
                const lat = (results[0].geometry.viewport.Wa.lo + results[0].geometry.viewport.Wa.hi) / 2;
                const lng = (results[0].geometry.viewport.Ga.lo + results[0].geometry.viewport.Ga.hi) / 2;
                postData(e, results[0].formatted_address, lat, lng)
            }
        });
    }

    const postData = async (e, formattedAddress, lat, lng) => {

        const response = await fetch('http://127.0.0.1:8000/locations/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: formattedAddress,
                entry_date: new Date().toISOString().slice(0, 10),
                lat: lat,
                lng: lng,
            })
        })
        const data = await response.json()
        console.log(data)
        setAddress('')
    }


    return (
        <div>
            <h1>Create Location</h1>
            <form onSubmit={handleSubmit}>
                <label>Address:</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            {locationElements}
        </div>
  )
}

export default LocationForm