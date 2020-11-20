const mongoose = require('mongoose')

const StartupSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Startups', StartupSchema)