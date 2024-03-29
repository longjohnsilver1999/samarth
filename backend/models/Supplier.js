const mongoose = require('mongoose')

const supplierDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
  
    supplier_info: {
        type: String,
        required: true
    },
  

})

const supplierDetails = mongoose.model('Supplier', supplierDetailSchema)
module.exports = supplierDetails