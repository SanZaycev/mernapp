const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    benefits: {
        type: [String],
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
    website: {
        type: String,
        default: null
    },
    logo: {
        type: String,
        default: null
    },
    banner: {
        type: String,
        default: null
    },
    reviews: [
        {
            author: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            authorJob: {
                type: String,
                required: true,
            },
            review: {
                type: String,
                required: true
            },
            plus: {
                type: String,
                required: true
            },
            minus: {
                type: String,
                required: true
            },
            isRecommend:{
                type: String,
                required: true
            },
            rating: {
                total: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                opportunities: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                workbalance: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                environment: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                management: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                benefits: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                },
                stress: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                }
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employer = mongoose.model('employer', EmployerSchema);