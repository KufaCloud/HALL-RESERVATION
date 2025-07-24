import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
    const [hall, setHall] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/bookings', { hall, date });
            setStatus(response.data.message);
        } catch (error) {
            setStatus('Booking failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={hall} onChange={(e) => setHall(e.target.value)} placeholder="Hall Name" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Reserve</button>
            <p>{status}</p>
        </form>
    );
};

export default Booking;