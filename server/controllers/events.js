import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT id, title, TO_CHAR(date, \'Mon DD, YYYY\') as DATE, time, location, image FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

const getEventsById = async (req, res) => {
    try {
        const eventId = parseInt(req.params.id)
        const results = await pool.query('SELECT id, title, TO_CHAR(date, \'Mon DD, YYYY\') AS date, time, location, image FROM events WHERE id=$1', [eventId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

export default {
    getEvents,
    getEventsById
}