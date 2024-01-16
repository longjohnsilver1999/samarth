const express = require('express')
const ItemDetails = require('../models/Items.js')
const router = express.Router()

router.post('/add', async (req, res) => {

    try{

        console.log("the body", req.body)
        const item = await ItemDetails.create(req.body)
    
        return res.status(200).json({
            data: item,
            message: "Item created successfully!"
        })

    } catch(error) {
        console.log("the error", error)
        return res.status(500).json({
            data: null,
            message: "Error while creating item!"
        })
    }

   

})

router.get('/getallitems', async (req, res) => {
    try {

        const items = await ItemDetails.find()
        return res.status(200).json({
            data: items,
            message: "Items fetched successfully!"
        })

    } catch (error) {
        console.log("the error", error)
        return res.status(500).json({
            data: null,
            message: "Error while finding item!"
        })
    }
})



router.put('/edititem/:id',async (req, res) => {
    try {
        const ids=req.params.id
        const items = await ItemDetails.findByIdAndUpdate(req.body,ids)
        return res.status(200).json({
            data: items,
            message: "Items fetched successfully!"
        })

    } catch (error) {
        console.log("the error", error)
        return res.status(500).json({
            data: null,
            message: "Error while updating item!"
        })}
        
    })

    router.delete('/deleteitem/:id',async (req, res) => {
        try {
            const ids=req.params.id
            const items = await ItemDetails.findByIdAndDelete(ids)
            return res.status(200).json({
                data: items,
                message: "Items fetched successfully!"
            })
    
        } catch (error) {
            console.log("the error", error)
            return res.status(500).json({
                data: null,
                message: "Error while updating item!"
            })}
            
        })
module.exports = router