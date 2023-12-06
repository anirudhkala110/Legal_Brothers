const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const doenv = require('dotenv')
const Contact = require('./Modal/ContactModal');

doenv.config()
const app = express();
const port = 8096 || process.env.PORT;

mongoose.connect('mongodb+srv://anirudhkala110:6RL4PMGvvOIxGDSt@cluster0.kypwz4x.mongodb.net/Legal_Brothers?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1:27017/Legal_Brothers')
app.use(bodyParser.json());
app.use(cors(
    {
        // origin: ["https://legal-brothers.vercel.app"],
        origin: ["https://legal-brothers.vercel.app/"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
))
app.options('/api/saveData', cors(
    {
        // origin: ["https://legal-brothers.vercel.app"],
        origin: ["https://legal-brothers.vercel.app/"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));
app.get('/', (req, res) => {
    console.log("Connected")
    return res.json('Connected')
})


app.post('/api/saveData', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const query = req.body.query;
    const mobile = req.body.mobile;
    const date = req.body.date;
    const time = req.body.time;
    const id = req.body.id
    console.log(name, email, mobile, query, date, time, id)
    try {
        // Create a new Contact document using the Contact model
        const newContact = new Contact({
            name: name,
            mobile: mobile,
            email: email,
            query: query,
            date: date,
            time: time,
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
