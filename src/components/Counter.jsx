import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../redux/features/counter'


const Counter = () => {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div style={{ fontSize: "30px", textAlign: "center" }}>
           <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>-</button>
            {value}
            <button className='btn btn-primary' onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter
