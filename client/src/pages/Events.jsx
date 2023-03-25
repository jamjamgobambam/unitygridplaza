import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'
import '../css/Events.css'
import '../css/Event.css'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='all-events'>
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
                ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled in UnityGrid Plaza yet!'}</h2>
            }
        </div>
    )
}

export default Events