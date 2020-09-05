const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    avatar: {
        type: String,
        required: true
    },
    /*banner: {
        type: String,
        required: true
    },*/
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Upload = mongoose.model('upload', UploadSchema);