import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import help from '../Images/helphand.png';
import axios from 'axios'
const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [query, setQuery] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [id, setId] = useState()
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  axios.defaults.withCredentials=true
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(currentDate)
    setTime(currentTime)
    setId(Date.now())
    if (name === '' || !name || mobile === '' || !mobile || email === '' || !email || query === '' || !query) {
      alert("Please Enter All the Fields")
    }
    else {
      axios.post('https://legal-brothers-api.vercel.app/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
      // axios.post('http://localhost:8096/api/saveData', { name: name, mobile: mobile, email: email, query: query, date: date, time: time, id: id })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            alert("Your  Query Has been saved.\nNow you are redirecting to the Homepage. . .")
            window.location.href = '/'
          }
          else {
            alert("Sorry, not able to send your query.\nTry again after some time.")
          }
        })
        .catch(err => console.log(err))
    }
  }

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
                  <input type="text" className="form-control rounded-0" id="formGroupName" placeholder="Your Valid Name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number</label>
                  <input type="number" className="form-control rounded-0" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupEmail">Email Address</label>
                  <input type="email" className="form-control rounded-0" id="formGroupEmail" placeholder="Email Address" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="formGroupQuery">Query / Information / Problem</label>
                  <textarea
                    type="text"
                    className="form-control rounded-0"
                    cols={30}
                    rows={5}
                    style={{ resize: "none" }}
                    id="formGroupQuery"
                    name="query"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
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
