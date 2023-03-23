import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import Location from '../components/Location'

const Locations = () => {

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
        <section>
            {
                locations && locations.length > 0 ? locations.map((location, index) =>
                    <Location
                        key={location.id}
                        id={location.id}
                        name={location.name}
                        address={location.address}
                        city={location.city}
                        state={location.state}
                        zip={location.zip}
                    />
                ) : <h2>{'No events scheduled at this location yet!'}</h2>
            }
        </section>
    )
}

export default Locations