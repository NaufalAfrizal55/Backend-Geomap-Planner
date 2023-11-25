const mongoose = require("mongoose")
const Schema = mongoose.Schema

const missionSchema = new Schema({
      geoJSON: {
      type: {
        type: String
      },
      features: [
        {
          type: {
            type: String
            },
          geometry: {
            type: Object
            },
          properties: {
            name: {
                type: String
            }
          },
        },
      ],
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Mission', missionSchema)