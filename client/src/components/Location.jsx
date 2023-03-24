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
        <article className='location-component' onClick={handleClick}>
            <h2>{props.name}</h2>
            <p>{props.address}, {props.city}, {props.state} {props.zip}</p>
        </article>
    )
}

export default Location