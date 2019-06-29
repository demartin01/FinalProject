const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    id: { type: Number , unique: true}, 
    name: { type: Number },
    value: { type: Number }, 
    latitude: { type: Number },
    longitude: { type: Number },
    zillowURL: { type: String},
    googleMap: { type: String}
})

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;