import React, { useState } from 'react'
import LocationForm from '../components/Forms/LocationForm'
import FoodForm from '../components/Forms/FoodForm'

function CreatePage() {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={()=>setToggle(!toggle)}>toggle form</button>
            {toggle ? <LocationForm />:<FoodForm />}
        </div>
  )
}

export default CreatePage