const mong = require('mongoose')

const {Schema} = mong

const foodEntrySchema = new Schema({
name: String,
calories: Number,
date: Date


})
// This is neccessary so we can actually use the schemas
module.exports = mong.model("FoodEntry",foodEntrySchema)