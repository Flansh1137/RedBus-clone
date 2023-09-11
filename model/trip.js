const mongoose = require ('mongoose');
const tripSchema = mongoose.Schema(
    {
        "date": Number, 
        "from": String, "to": String, "busOwnerID": Number , 
        "startTime":Number , 
        "EndTime": Number, 
        "category": String,
        "SeatBooked": Array,
        "bus_no": Number, 
        "animeties_list": Array, 
        "busFare": Number, 
        "busName": String 
    }
)

const tripModel = mongoose.model('Trip',tripSchema);
module.exports = tripModel ;