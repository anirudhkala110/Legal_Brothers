// utils.js

const fs = require('fs');

const saveDataToJSON = (data) => {
  try {
    // Read existing data from the JSON file
    const existingData = require('../Components/contactDetails');

    // Append the new data to the existing data array
    existingData.push(data);

    // Write the updated data back to the JSON file
    fs.writeFileSync('../contactDetails.json', JSON.stringify(existingData));

    console.log('Data saved to JSON file:', data);
  } catch (error) {
    console.error('Error saving data to JSON file:', error);
  }
};

export { saveDataToJSON };
