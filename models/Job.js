const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'employers'
    },
    cid: {
        type: Number,
        required: true
    },
    scid: {
        type: Number,
        required: true
    },
    regionid: {
        type: Number,
        required: true
    },
    cityid: {
        type: Number,
        required: true
    },
    catName: {
        type: String,
        required: true
    },
    subcatName: {
        type: String,
        required: true
    },
    regionName: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true,
    },
    createdby: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    coords: {
        type: Number,
        index: '2dsphere',
        default: null
    },
    youtube: {
        type: String,
        default: null
    },
    skills: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Job = mongoose.model('job', JobSchema);