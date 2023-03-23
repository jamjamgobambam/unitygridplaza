import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import Location from '../components/Location'
import Event from '../components/Event'

const LocationEvents = ({index}) => {
    const [events, setEvents] = useState([])

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
    )
}

export default LocationEvents