const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Cars = new Schema({
    // _id: Schema.Types.ObjectId,
    make: { type: String },
    year: { type: Number, },
    model: { type: String },
    description: { type: String },
    car_show: { type: String },
    vehicle_image: { type: String },
    secure_url: { type: String }
    // user: { type: mongoose.Types.ObjectId, ref: 'User'},
    // vehicle_image: { type: mongoose.Types.ObjectId, ref: "Images"}
})

module.exports = mongoose.model("Cars", Cars);