const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid function

const contactSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, // Use uuidv4 to generate a random ID
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: () => new Date().toLocaleDateString(),
  },
  time: {
    type: String,
    default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  query: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
