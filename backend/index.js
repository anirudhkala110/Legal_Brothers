const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Contact = require('./Modal/ContactModal'); // Assuming you saved the schema/model in a 'models' directory
const cors = require('cors')

const app = express();
const port = 5000;
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}))
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://anirudhkala110:6RL4PMGvvOIxGDSt@cluster0.kypwz4x.mongodb.net/Legal_Brothers?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  console.log("Connected");
});

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid'); // Import the uuid library
// const app = express();
// const cors = require('cors');

// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   console.log("Connected");
//   res.json("Connected");
// });

// app.post('/api/saveData', (req, res) => {
//   const formData = req.body;

//   // Generate a random ID using uuid
//   const entryId = uuidv4();

//   const currentDate = new Date().toLocaleDateString();
//   const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   const updatedFormData = {
//     id: entryId, // Add the generated ID
//     ...formData,
//     date: formData.date || currentDate,
//     time: formData.time || currentTime,
//   };

//   const filePath = 'data.json';

//   try {
//     let existingData = [];

//     if (fs.existsSync(filePath)) {
//       const fileContent = fs.readFileSync(filePath, 'utf-8');

//       // Attempt to parse the existing file content
//       try {
//         existingData = JSON.parse(fileContent);
//       } catch (parseError) {
//         console.error('Error parsing existing JSON file content:', parseError);
//       }
//     }

//     existingData.push(updatedFormData);

//     // Write updated data back to the JSON file
//     fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
//     console.log(updatedFormData);

//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving form data to JSON file:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
