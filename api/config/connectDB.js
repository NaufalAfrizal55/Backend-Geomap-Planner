const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`MongoDB Connected`)
        })
        .catch((err) => console.log(err))
    }
    catch (err) {
        console.error(err)
        process.exit(1)
    }
}
module.exports = connectDB