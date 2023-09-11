// create module Schema

const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema(

    { 
        "userName": {
            type : String,
        }, 
        "phoneNo": {
            type : Number,
        }, 
        "age": {
            type : Number,
        },  
        "gender": {
            type : String,
        } 
        }
)

const Bus = mongoose.model('booking',bookingSchema);
module.exports = booking;