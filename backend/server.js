const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const bookings = [];

app.post('/api/bookings', (req, res) => {
    const { hall, date } = req.body;
    bookings.push({ hall, date });
    res.json({ message: 'Booking successful' });
});

app.listen(3001, () => console.log('Server running on port 3001'));