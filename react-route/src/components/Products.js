import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Products = () => {

    const LIMIT = 20
    let { search } = useLocation()
    let query = new URLSearchParams(search)
    let start = parseInt(query.get("start"))
    let end = parseInt(query.get("end"))
    console.log(start, end)
    let navigate = useNavigate()
    console.log(navigate)

    const handlePrev = (e) => {
        navigate(-1)
    }

    const handleNext = (e) => {
        navigate(`?start=${start + LIMIT}&end=${end + LIMIT}`);
    }

    return (
        <div>
            <h2>Products</h2>
            <p>Showing productos from <b>{start}</b> to <b>{end}</b></p>
            {start > LIMIT && <button onClick={handlePrev}>back</button>}
            <button onClick={handleNext}>forward</button>
        </div>
    )
}

export default Products