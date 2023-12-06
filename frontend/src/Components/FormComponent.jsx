import React, { useState, useEffect } from 'react';
import fs from 'fs';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        date: '',
        time: '',
        query: '',
    });

    useEffect(() => {
        // Read data from the file on component mount
        try {
            const fileData = fs.readFileSync('contactDetails.js', 'utf8');
            if (fileData) {
                const jsonData = JSON.parse(fileData);
                // Use jsonData as needed, e.g., update state
                console.log('Data from file:', jsonData);
            }
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }, []); // Empty dependency array to run the effect only once on mount

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Your form validation logic can go here

        // Add date and time
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const updatedFormData = {
            ...formData,
            date: formData.date || currentDate,
            time: formData.time || currentTime,
            id: Date.now().toString(), // Add a unique identifier
        };

        try {
            // Check if the file exists
            const fileExists = fs.existsSync('contactDetails.js');
            if (!fileExists) {
                // If the file does not exist, create it and write the updatedFormData
                fs.writeFileSync('contactDetails.js', JSON.stringify([updatedFormData], null, 2), 'utf8');
            } else {
                // If the file exists, read its current data, update with new data, and write back
                const fileData = fs.readFileSync('contactDetails.js', 'utf8');
                const existingData = fileData ? JSON.parse(fileData) : [];
                existingData.push(updatedFormData);
                fs.writeFileSync('contactDetails.js', JSON.stringify(existingData, null, 2), 'utf8');
            }

            // Optionally, you can also update state or trigger a re-render
            setFormData({
                name: '',
                mobile: '',
                email: '',
                date: '',
                time: '',
                query: '',
            });
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="mobile">Mobile:</label>
                <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="query">Query:</label>
                <textarea id="query" name="query" value={formData.query} onChange={handleInputChange} required />
            </div>
            {/* Repeat similar blocks for other form fields */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
