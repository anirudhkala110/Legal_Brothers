// adminModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid function

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4, // Use uuidv4 to generate a random ID
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // You might want to add validation for a valid email address here
    },
    password: {
        type: String,
        required: true,
        // You might want to add more validation for password strength here
    },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
