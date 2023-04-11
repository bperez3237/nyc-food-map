import React, {useState, useEffect} from 'react'

// import Cookies from 'js-cookie'

// const csrftoken = Cookies.get('csrftoken');
// console.log(csrftoken)

function CreatePage() {
    const [address, setAddress] = useState('')
    console.log(address)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/locations/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                address: address,
                entry_date: new Date().toISOString().slice(0, 10)
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
        </div>
  )
}

export default CreatePage