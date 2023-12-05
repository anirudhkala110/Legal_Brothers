const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const doenv = require('dotenv')
const Contact = require('./Modal/ContactModal');

doenv.config()
const app = express();
const port = 8096 || process.env.PORT;

// mongoose.connect('mongodb+srv://anirudhkala:gMuwTIoI3ojlp8R6@cluster0.pkh7czu.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://anirudhkala110:6RL4PMGvvOIxGDSt@cluster0.kypwz4x.mongodb.net/Legal_Brothers?retryWrites=true&w=majority')
app.use(bodyParser.json());
app.use(cors(
    {
        origin: ["https://legal-brothers-online.vercel.app/"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
))

app.get('/', (req, res) => {
    console.log("COnnected")
    return res.json('Connected')
})


app.post('/api/saveData', async (req, res) => {
    const formData = req.body;

    try {
        // Create a new Contact document using the Contact model
        const newContact = new Contact({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            query: formData.query,
            // Optionally, date and time will be automatically set to current date/time if not provided
            date: formData.date,
            time: formData.time,
        });

        // Save the new contact data to MongoDB
        await newContact.save();

        res.json({ success: true });
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Start the server and read data from data.json
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    readAndStoreData();
});
