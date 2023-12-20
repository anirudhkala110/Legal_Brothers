const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid function

const updateSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
  },
  topic: {
    type: String,
    required: true,
  },
  desc: {
    type: Object, // Change the type to Object
    required: true,
  },
  uploadDate: {
    type: String,
    default: () => new Date().toLocaleDateString(),
  },
  time: {
    type: String,
    default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
});

const Update = mongoose.model('Updates', updateSchema);

module.exports = Update;
