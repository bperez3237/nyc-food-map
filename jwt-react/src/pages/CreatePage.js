import React, {useState, useEffect} from 'react'

// import Cookies from 'js-cookie'

// const csrftoken = Cookies.get('csrftoken');
// console.log(csrftoken)

function CreatePage() {
    const [address, setAddress] = useState('')
    const [locations, setLocations] = useState([])
    console.log(address)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/locations/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLocations(data.locations)})
    }, [])

    const locationElements = locations ? locations.map(location => {
        console.log(location)
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
                postData(e, lat, lng)
            }
        });
    }


    const postData = async (e, lat, lng) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/locations/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                address: address,
                entry_date: new Date().toISOString().slice(0, 10),
                lat: lat,
                lng: lng,
            })
        })
        const data = await response.json()
        console.log(data)
    }


    return (
        <div>CreatePage
            <form onSubmit={handleSubmit}>
                <label>Address:</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            {locationElements}
        </div>
  )
}

export default CreatePage