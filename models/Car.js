//this file to create a schema
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a title of the car']
    },
    category:[{
        type: String,
        required: [true, 'Please enter a category of the car']
    }],
    price:{
        type: Number,
        required: [true, 'Please enter a price']
    },
    onSale:{
        type: Boolean,
        default: false,
        required: false
    },
    sale_price:{
        type: Number,
        default: 0.0,
        required: false
    },
    main_image:{
        type: String,
        required: false
    },
    images: [{
        type: String,
        required: false
    }],
    description:{
        type: String,
        required: [true, "Please enter a description"]
    },
    short_desc:{
        type:String,
        required: false
    }
    
});



module.exports = mongoose.model( 'Car', CarSchema);