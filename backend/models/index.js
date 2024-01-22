// const mongoose = require('mongoose')
const mongoose = require('mongoose');

// Keys of diff prop of cookdb
const url = "mongodb+srv://aronngrant97:aronn@cluster0.ipyzetk.mongodb.net/"


// Creating Schemas
const produceSchema = new mongoose.Schema({
    pName: {
        type: String,
        unique: true,
        required: [true, 'No produce?']
    }, 
    quantity: {
        type: Number,
        required: [true, "Enter a valid number"]
    }
})
const Produce = mongoose.model('Produce', produceSchema);

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        index: true,
        unique: true,
        
    },
    produces: [ {type: String, ref: 'Produce' }],
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Incorrect Password. Please try again.']
    }
})
const User = mongoose.model('User', userSchema);


// Export
module.exports = {User, Produce}