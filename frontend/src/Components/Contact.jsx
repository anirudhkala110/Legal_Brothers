import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import help from '../Images/helphand.png';
import axios from 'axios'
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    time: '',
    query: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    axios.defaults.withCredentials = true
    e.preventDefault();

    // Your form validation logic can go here

    // Add date and time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const updatedFormData = {
      ...formData,
      date: formData.date || currentDate,
      time: formData.time || currentTime,
      id: Date.now(), // Add a unique identifier
    };

    try {
      const response = await fetch('http://localhost:5000/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        // Redirect to the home page upon successful data storage
        navigate('/');
      } else {
        console.error('Failed to save data to the backend.');
      }
    } catch (error) {
      console.error('Error sending form data to the backend:', error);
    }

    // Reset form after submission
    setFormData({
      name: '',
      mobile: '',
      email: '',
      date: '',
      time: '',
      query: '',
    });
  };

  const handleButtonClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };


  return (
    <>
      <div className="bg-white">
        <center className="fs-4 text-primary bg-white border-bottom py-3">Contact Us Demo Page</center>
        <div className="px-5 py-1 container" style={{ background: "rgba(0, 0, 0, 5%)", minHeight: "100vh" }}>
          <div className="my-3">
            <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i> If you have legal questions or require our assistance, please don't hesitate to get in touch with <b>Legal Brothers</b>. We are here to help you navigate your legal challenges and provide the best possible legal support. Reach out to us today to schedule a consultation with our experienced legal team. Your peace of mind and legal success are our top priorities.
          </div>
          <hr className="" style={{ color: "black" }} />
          <div className="row col-12">
            <div className="border bg-white col-lg-6 col-xl-6 my-2 py-2 col-sm-12 d-flex align-items-center justify-content-center " style={{ minHeight: "" }}>
              <img src={help} className="border shadow rounded border-secondary" style={{ width: "100%" }} alt="Helping hand" />
            </div>
            <div className="container border pt-3 col-lg-6 col-xl-6 my-2 py-2 col-sm-12 pb-1 bg-white">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupName">Name</label>
                  <input type="text" className="form-control rounded-0" id="formGroupName" placeholder="Your Valid Name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number</label>
                  <input type="number" className="form-control rounded-0" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupEmail">Email Address</label>
                  <input type="email" className="form-control rounded-0" id="formGroupEmail" placeholder="Email Address" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupQuery">Query / Information / Problem</label>
                  <textarea
                    type="text"
                    className="form-control rounded-0"
                    cols={30}
                    rows={9}
                    style={{ resize: "none" }}
                    id="formGroupQuery"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    placeholder="Enter your query here" required
                  />
                </div>
                <button className="btn border-0 rounded-0 mb-2 send-mail">Send Mail</button>
                <button className="btn border-0 rounded-0 ms-2 mb-2 call-btn" onClick={() => handleButtonClick(7668490213)}>Make a Call</button>
                <Link to="/" className="text-decoration-none">
                  <button className="btn ms-2 border-0 rounded-0 mb-2 back-home">Back to Home</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
