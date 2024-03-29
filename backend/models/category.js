const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category