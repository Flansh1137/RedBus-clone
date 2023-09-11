const mongoose = require('mongoose');
const busSchema = mongoose.Schema(

    { 
        "name": {
            type : String,
        }, 
        "totalSeats": {
            type : Number,
        }, 
        "rating": {
            type : Number,
        },  
        "animeties": {
            type : [String]
        } 
        }
)

const Bus = mongoose.model('Bus',busSchema);
module.exports = Bus;