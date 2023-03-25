import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'

const LocationButtons = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='event-filters'>
            {
                locations && locations.length > 0 ? locations.map((event, index) =>
                    <button>{location.name}</button>
                ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No locations found in UnityGrid Plaza yet!'}</h2>
            }
        </div>
    )
}

export default LocationButtons