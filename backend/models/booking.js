const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    hotel_id: {
        type: Number,
        required: true
    },
    booking_date: {
        type: String,
        required: true
    },
    booking_start: {
        type: String,
        required: true
    },
    booking_end: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    }
}, {timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;