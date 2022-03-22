import React from 'react';
import classes from './TimeAndDate.module.css'

const Time = (props) => {
    let clock = new Date()
    let time = clock.getHours() + ":" + clock.getMinutes();
    let today = new Date().toLocaleDateString();
    
    

    return (
        <div className=''>
            <h1>{time}</h1>
            <h2>{today}</h2>
        </div>
    )
};



export default Time;