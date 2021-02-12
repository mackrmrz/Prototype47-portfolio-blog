const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Project = new Schema({
    project_id: Schema.Types.ObjectId,
    title: { type: String },
    skill: [{ type: String }],
    description: { type: String },
    project_url: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "User"},
    portfolio_image: { type: mongoose.Types.ObjectId, ref: "Images"}
});

module.exports = mongoose.model('Project', Project);

//projects

//SKILLS ITEMS

//BLOG 