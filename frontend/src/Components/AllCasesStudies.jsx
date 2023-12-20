import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import UpdateItem from './UpdatedItems';

const AllCasesStudies = () => {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8096/api/getAllUpdates')
      .then(res => {
        setBlogs(res.data.updates);
      })
      .catch(err => {
        console.log(err);
      });
  });

  const [value, setValue] = useState(blogs.length > 0 ? blogs[0].id : null);

  const setBlog = (index) => {
    setValue(index);
    setId(index);
  };
  const [login, setLogin] = useState(null);
  const [msg, setMsg] = useState(null);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    // Check admin authentication
    axios.get('http://localhost:8096/api/protectedRoute')
      .then(res => {
        setLogin(true);
        setAdmin(true)
        setMsg(false);
      })
      .catch(err => {
        setLogin(false);
        setAdmin(false)
        setMsg(err.message);
      });
  },300);
  const handleLogout = async () => {
    try {
      // Make a request to your logout endpoint
      const res = await axios.get('http://localhost:8096/api/logout');

      if (res.data.success) {
        // If the logout was successful, redirect to the login page or perform any other necessary actions
        window.location.href = '/login';
      } else {
        // Handle the case where logout was not successful (maybe show an error message)
        console.error('Logout failed:', res.data.error);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('An error occurred during logout:', error);
    }
  };
  return (
    <div className='pt-4 d-flex justify-content-center bg-white' style={{ minHeight: "70vh", color: "white" }}>
      <Helmet>
        <title>Legal Brothers - Updates</title>
        <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
        <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
      </Helmet>
      <div className='px-4 bg-white text-black container ' style={{ background: "#00000070", minHeight: "90vh" }}>
        {admin && <div className='d-flex justify-content-end'><center className='btn rounded-0 btn-success'>Logged In as <b>Admin</b></center><button className='btn btn-danger rounded-0 mx-2' onClick={handleLogout}>Logout</button></div>}
        <center className='fs-2 fw-semibold'>Updates For You</center>
        <div className='w-100 d-flex justify-content-end align-items-center'>
          {admin && <Link to={`${admin ? `/auth/isValid/${admin}/add-update` : `/auth/false/add-update`}`}><button className='btn btn-outline-primary'>Add</button></Link>}
        </div>
        <hr />
        <div className='container'>
          <div className='blogs-base'>
            <div className='blogs-base-div-1 mb-3 px-3 py-2 border-bottom' style={{ maxHeight: "350px", overflowY: "auto" }}>
              {blogs.map((data, i) => (
                <div
                  key={i}
                  className={`py-1 px-3 mb-2 blog-div rounded shadow ${id === i ? 'bg-dark text-light' : 'bg-white'}`}
                  style={{ background: "white" }}
                  onClick={() => setBlog(i)}
                >
                  <b>{i + 1} .</b>&nbsp;&nbsp; <i> {data.topic}</i>
                </div>
              ))}
            </div>
            <div className='blogs-base-div-2 rounded border mb-3 px-3 py-3 shadow' style={{ minHeight: "400px" }}>
              {blogs.length > 0 && (
                <>
                  <div className='fs-3 fw-semibold mb-2'>{id + 1}. &nbsp;&nbsp;&nbsp;&nbsp; {blogs[id].topic}</div>
                  <hr />
                  <div style={{ whiteSpace: 'pre-line', maxHeight: "100vh", overflowY: "auto" }} className='mb-1'><UpdateItem update={blogs[id].desc} /></div>
                  {admin && (
                    <>
                      <button className='btn btn-outline-success me-1 shadow my-1'>Edit</button>
                      <Link to='/add-update'><button className='btn btn-outline-dark me-1 shadow my-1'>Delete</button></Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCasesStudies;
