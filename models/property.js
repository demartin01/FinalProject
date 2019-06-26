const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    name: { type: String }, 
    Currency: { type: Number },
    url: { type: String }, 
    City: { type: String },
    State: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
})

const property = mongoose.model("Property", propertySchema);