import "./Counter.css"
import React, { useState } from 'react'

const Counter = () => {
    const [arr, setArr] = useState([])

     const addPlus = () => {
        setArr(prevArr => [ ...prevArr, "+" ])  
     }

     const addMinus = () => {
        setArr(prevArr => [ ...prevArr, "-" ])
     }

    return (
    <div className="counter">
        <button onClick={addMinus} className="btn btn__minus">-</button>
        <button onClick={addPlus} className="btn btn__plus">+</button>
        {arr.toString()}
    </div>
    )
}

export default Counter