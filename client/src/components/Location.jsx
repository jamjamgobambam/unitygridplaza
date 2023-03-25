import React, { useState, useEffect } from 'react'
import '../css/Location.css'

const Location = (props) => {

    const handleClick = (event) => {
        if (props.id === 1) {
            window.location = "/echolounge"
        }
        else if (props.id === 2) {
            window.location = "/houseofblues"
        }
        else if (props.id === 3) {
            window.location = "/pavilion"
        }
    }

    return (
        <div className='location-building-image' onClick={handleClick}>
            <img src={props.image} />

            <div className='location-overlay'>
                <button>{props.name}</button>
            </div>
        </div>
    )
}

export default Location