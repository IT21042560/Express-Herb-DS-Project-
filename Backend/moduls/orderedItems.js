const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderItem = new Schema({

    order_id : {
        type: String,
        required: true
    },

    customer_name : {
        type: String,
        required: true
    },

    address : {
        type: String,
        required: true
    },
    
    email : {
        type: String,
        required: true
    },

    status : {
        type: String,
        required: true
    },

    date : {
        type: Date,
        required: true
    }

})

const orderedI = mongoose.model("orderedItems",orderItem);
module.exports = orderedI;