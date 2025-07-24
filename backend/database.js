// This is a simple placeholder for actual DB operations
const bookings = [];

function addBooking(hall, date) {
    bookings.push({ hall, date });
}

function getBookings() {
    return bookings;
}

module.exports = { addBooking, getBookings };