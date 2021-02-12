const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String, required: true },
    project: [{ type: mongoose.Types.ObjectId, ref: "Project"}],
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    password: { type: String, required: true, unique: true },
})


module.exports = mongoose.model("User", userSchema);