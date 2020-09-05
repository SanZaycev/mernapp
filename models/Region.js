const mongoose = require('mongoose');

module.exports = Region = mongoose.model('region', RegionSchema);
const RegionSchema = new mongoose.Schema({
    rid: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    uri: {
        type: String,
        required: true,
        unique: true
    },
    capital: {
        type: String,
        required: true,
        unique: true
    },
    cities: [
        {
            cid: {
                type: Number,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
                unique: true
            },
            uri: {
                type: String,
                required: true,
                unique: true
            },
            capital: {
                type: String,
                required: true
            }
        }
    ]
});
