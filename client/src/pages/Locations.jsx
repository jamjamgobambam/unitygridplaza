import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import Location from '../components/Location'
import building1 from '../assets/building1.png'
import building2 from '../assets/building2.png'
import building3 from '../assets/building3.png'
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
            <div className='first-location'>
                <Location key={firstLocation.id} id={firstLocation.id} name={firstLocation.name} image={building3} />
            </div>

            <div className='second-location'>
                <Location key={secondLocation.id} id={secondLocation.id} name={secondLocation.name} image={building2} />
            </div>

            <div className='third-location'>
                <Location key={thirdLocation.id} id={thirdLocation.id} name={thirdLocation.name} image={building1} />
            </div>
        </div>
    )
}

export default Locations