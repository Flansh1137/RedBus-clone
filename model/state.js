const mongoose = require ('mongoose');
const StateSchema = mongoose.Schema(
    {
        state: {
            type: String
            
          },
          districts: {
            type: [String]
            
          }
    }
)

const state = mongoose.model('state',StateSchema);
module.exports = state;