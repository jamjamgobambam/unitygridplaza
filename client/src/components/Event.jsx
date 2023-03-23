import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import dates from '../utilities/dates'

const Event = (props) => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const result = await dates.formatTime(event.time)
                setTime(result)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])

    return (
        <article style={{background: `url(${event.image})`}}>
            <h3>{event.title}</h3>
            <p>{event.date}  |  {time}</p>
        </article>
    )
}

export default Event