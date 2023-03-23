import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import Event from '../components/Event'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(parseInt(index))
                setLocation(locationData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await LocationsAPI.getEventsByLocation(parseInt(index))
                setEvents(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <section>
            <header>
                <h2>{location.name}</h2>
                <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
            </header>
            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2>{'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </section>
    )
}

export default LocationEvents