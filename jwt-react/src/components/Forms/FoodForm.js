import React, {useState, useEffect} from 'react'

function FoodForm() {
    const [name, setName] = useState('')
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/foods/')
            .then(res => res.json())
            .then(data => setFoods(data.foods))
    }, [])

    const foodElements = foods ? foods.map(food => {
        return (
            <div key={food.id}>
                <h3>{food.name}</h3>
            </div>
        )
    }) : []

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            return
        }

        postData(e)
    }


    const postData = async (e) => {
        const response = await fetch('http://127.0.0.1:8000/foods/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            })
        })
        const data = await response.json()
        console.log(data)
        setName('')
    }


    return (
        <div>
            <h1>Create Food</h1>
            <form>
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {foodElements}
        </div>
    )
}

export default FoodForm