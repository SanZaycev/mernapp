const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
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
    subcategories: [
        {
            cid: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            uri: {
                type: String,
                required: true
            }
        }
    ]
});
module.exports = Categories = mongoose.model('categories', CategoriesSchema);