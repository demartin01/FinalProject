const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const propertySchema = new Schema({
    name: { type: String }, 
    location: {type: String },
    //add more columns here based on what i need from Zillow see sample 
})

const property = mongoose.model("Property", propertySchema);