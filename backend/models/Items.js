const mongoose = require('mongoose')

const itemDetailSchema = new mongoose.Schema({
    itemname: {
        type: String,
        required: true,
    },
    price: {
        type:  Number,
        required: true,
    },
    supplier_info: {
        ref: "Supplier",
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    mfgDate: {
        type: Date,
        required: true,
    },
    category: {
        ref: 'Category',
        type: mongoose.Types.ObjectId
    }
})

const ItemDetails = mongoose.model('Item', itemDetailSchema)
module.exports = ItemDetails