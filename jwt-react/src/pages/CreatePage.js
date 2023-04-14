import React, { useState } from 'react'
import LocationForm from '../components/Forms/LocationForm'
import FoodForm from '../components/Forms/FoodForm'

function CreatePage({locations, setLocations}) {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={()=>setToggle(!toggle)}>toggle form</button>
            {toggle ? <LocationForm locations={locations} setLocations={setLocations}/>:<FoodForm />}
        </div>
  )
}

export default CreatePage