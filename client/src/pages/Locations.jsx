import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import Location from '../components/Location'
import venue1 from '../assets/venue1.png'
import venue2 from '../assets/venue2.png'
import venue3 from '../assets/venue3.png'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [firstLocation, setFirstLocation] = useState([])
    const [secondLocation, setSecondLocation] = useState([])
    const [thirdLocation, setThirdLocation] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
                setFirstLocation(locationsData[0])
                setSecondLocation(locationsData[1])
                setThirdLocation(locationsData[2])
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='available-locations'>
            <Location key={firstLocation.id} id={firstLocation.id} name={firstLocation.name} overlay='location-overlay' />
            <Location key={secondLocation.id} id={secondLocation.id} name={secondLocation.name} overlay='location-overlay' />
            <Location key={thirdLocation.id} id={thirdLocation.id} name={thirdLocation.name} overlay='location-overlay-last' />
            
            <div className='first-location'>
                {/* <Location key={firstLocation.id} id={firstLocation.id} name={firstLocation.name} image={venue1} overlay='location-overlay' /> */}
                
            </div>

            <div className='second-location'>
                {/* <Location key={secondLocation.id} id={secondLocation.id} name={secondLocation.name} image={venue2} overlay='location-overlay' /> */}
                
            </div>

            <div className='third-location'>
                {/* <Location key={thirdLocation.id} id={thirdLocation.id} name={thirdLocation.name} image={venue3} overlay='location-overlay-last' /> */}
                
            </div>
        </div>
    )
}

export default Locations