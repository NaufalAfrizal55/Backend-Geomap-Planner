const mongoose = require("mongoose")
const Schema = mongoose.Schema

const missionSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Mission', missionSchema)