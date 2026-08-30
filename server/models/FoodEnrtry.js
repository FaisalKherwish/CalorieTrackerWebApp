const mong = require('mongoose')

const {Schema} = mong

const foodEntry = new Schema({
name: String,
calories: Number,
date: Date


})