import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Counter = () => {
    const [counter, setCounter] = useState(1)
    const [show, setshow] = useState(true);
    const add = () => {
        if (counter < 3)
            setCounter(counter + 1);
        else {
           toast.warning("You cannot click more than 3 ")
        }
    }

    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
        else{
            toast.warning("You cannot click less than 1")
        }
    }
    const updateValue=()=>{
        setshow(!show);
    }
    return (
        <div style={{ fontSize: "30px", textAlign: "center" }}>
            {show ?<h1> Hello India won by cheating</h1> : <h1>South Africa is like Pakistan</h1>}
            <button onClick={updateValue}> Change update</button>
           {counter ===3 ? <h1> Your Account limit is full</h1> : null}  
           <button className='minus' onClick={minus}>-</button>
            {counter}
            <button className='minus' onClick={add}>+</button>
        </div>
    )
}

export default Counter
