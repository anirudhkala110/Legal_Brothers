const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const doenv = require('dotenv')
const bcrypt = require('bcryptjs')
const Contact = require('./Modal/ContactModal');
const Admin = require('./Modal/AdminModal');
const Updates = require('./Modal/UpdateModal');

doenv.config()
const app = express();
const port = 8096 || process.env.PORT;
const jwtSecret = 'your-secret-key'; // Replace with your actual secret key

mongoose.connect('mongodb+srv://anirudhkala110:6RL4PMGvvOIxGDSt@cluster0.kypwz4x.mongodb.net/Legal_Brothers?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1:27017/Legal_Brothers')

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(
    {
        // origin: ["https://heliverse-1ugi.vercel.app"],
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
))

app.get('/', (req, res) => {
    console.log("Connected")
    return res.json('Connected')
})

var x;
//Saving Customer Data
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
            // Optionally, date and time will be automatically set to current date/time if not provided
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

//Admin Register
app.post('/api/register', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    if (cpassword != password) {
        return res.json({ msg: "Password didn't match, try again. .  .", msg_type: 'error' })
    }
    if (cpassword === '' || !cpassword) return res.json({ msg: "Enter valid Confirm Password, try again. .  .", msg_type: 'error' })

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new admin using the Admin model
        const newAdmin = new Admin({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save the new admin to MongoDB
        await newAdmin.save();

        res.status(201).json({ msg: 'Admin registered successfully', msg_type: 'good' });
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Login data
app.post('/api/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        // Find the admin by email
        const admin = await Admin.findOne({ email: email });

        if (!admin) {
            return res.json({ msg: 'Invalid email or password', msg_type: 'error' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, admin.password);

        if (isPasswordMatch) {
            // Passwords match, login successful
            const token = jwt.sign({ userId: admin._id }, jwtSecret, { expiresIn: '1h' });
            x = token
            res.cookie('token', token, { httpOnly: true });
            return res.json({ msg: 'Login successful', msg_type: 'good', login: true });
        } else {
            // Passwords do not match
            res.json({ msg: 'Invalid email or password', msg_type: 'error' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Logout
app.get('/api/logout', (req, res) => {
    // Assuming you are using session-based authentication
    x = ''
    res.clearCookie('token');
    return res.status(500).json({ success: true, error: 'Logout Successful' });

});

//All updates data
app.get('/api/getAllUpdates', async (req, res) => {
    try {
        // Find all documents in the Updates collection and sort by the 'uploadDate' field in descending order
        const allUpdates = await Updates.find().sort({ time: -1, uploadDate: -1 });

        if (!allUpdates) {
            return res.status(404).json({ success: false, error: 'Updates not found' });
        }

        res.json({ success: true, updates: allUpdates });
    } catch (error) {
        console.error('Error retrieving updates from MongoDB:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


// Middleware to check admin authentication
const checkAdminAuth = (req, res, next) => {
    // Get the JWT from the cookie
    const token = req.cookies.token;
    if (!x) {
        // Token is missing, admin is not authenticated
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify the JWT
    jwt.verify(x, jwtSecret, (err, decodedToken) => {
        if (err) {
            // Token is not valid, admin is not authenticated
            return res.status(401).json({ error: 'Unauthorized' });
        } else {
            // Token is valid, attach admin information to the request object
            req.admin = decodedToken;
            next(); // Continue to the next middleware or route handler
        }
    });
};

app.get('/api/protectedRoute', checkAdminAuth, (req, res) => {
    // If the code reaches here, it means the admin is authenticated
    res.json({ message: 'Admin is authenticated', adminId: req.admin.userId, login: true });
});


// Updating Data API
app.post('/api/saveUpdate', checkAdminAuth, async (req, res) => {
    const { topic, content } = req.body;
    const date = req.body.date;
    const time = req.body.time;

    try {
        // Convert content object to a string
        const desc = JSON.stringify(content);

        const newUpdate = new Updates({
            topic: topic,
            desc: desc, // Save the stringified content
        });

        console.log(topic, content);
        await newUpdate.save();

        res.status(201).json({ msg: 'Update saved successfully' });
    } catch (error) {
        console.error('Error saving update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the server and read data from data.json
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});