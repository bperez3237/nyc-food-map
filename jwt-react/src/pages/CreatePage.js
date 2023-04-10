import React, {useState, useEffect} from 'react'

function CreatePage() {
    const [address, setAddress] = useState('')
    console.log(address)

    const handleSubmit = async (e) => {
        e.preventDefault()

        


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