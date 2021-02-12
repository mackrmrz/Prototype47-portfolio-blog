const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    image_id: Schema.Types.ObjectId,
    vehicle_image: { type: String },
    portfolio_image: { type: String },
    project: { type: mongoose.Types.ObjectId, ref: 'Project' },
    // cars: { type: mongoose.Types.ObjectId, ref: 'Cars'}
})


module.exports = mongoose.model("Images", imagesSchema);