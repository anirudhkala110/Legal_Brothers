import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Components/Landing';
import Navbar from './Utils/Navbar';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import AllCasesStudies from './Components/AllCasesStudies';
import FamilyLaw from './Assest/FamilyLaw';
import CriminalDefence from './Assest/CriminalDefence';
import BusinessLaw from './Assest/BusinessLaw';
import ImmigrationLaw from './Assest/ImmigrationLaw';
import Footer from './Utils/Footer';
import PrivacyPolicy from './Utils/PrivacyPolicy';
import TermsConditions from './Utils/TermsConditions';
import Accessibility from './Utils/Accessibility';
import PropertyAuditing from './Assest/PropertyAuditing';
import { useEffect, useState } from 'react';
function App() {
  const initialI = parseInt(localStorage.getItem('i')) || 0;
  const [i, setI] = useState(initialI);

  useEffect(() => {
    localStorage.setItem('i', i.toString());

    const intervalId = setInterval(() => {
      setI((prevI) => prevI + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [i]);

  const handleButtonClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='bg-black' style={{minWidth:"350px"}}>
      {
        i === 0 ? <div className='min-vh-100 d-flex align-items-center justify-content-center bg-light'>
          <div className='card w-25 starter border border-black'>
            <div className='card-header fs-2 fw-bold bg-black text-white' >
              Hey ! ,
            </div>
            <div className='card-body' style={{ color: "#D90700" }}>
              <div className='card-title fw-semibold fs-4'>
                Welcome to Legal Brothers,
              </div>
              <div className='card-text'>
                Having issue,<br />Get<strong className='fs-4 text-black'> free </strong>consultaion from experts
              </div>
            </div>
            <div className='card-footer bg-black'>
              <button className='btn border-0 text-white w-100' onClick={e => handleButtonClick(7668490213)} style={{ background: "#D90700" }}>
                <span class="bi bi-telephone-fill fw-bold" >&nbsp;&nbsp;Call Now</span>
              </button>
            </div>
          </div>
        </div> :
          <div>
            <button className='btn slider text-white' onClick={e => handleButtonClick(7668490213)} style={{ background: "#D90700" }}>
              <div><b><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;<strong>CALL NOW</strong></b> <br className='br-in-slider' /><span className='Number'>+91-7668490213</span></div>
            </button>
            <div className="App min-vh-100">
              <Navbar />
              <Router>
                <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route exact path='/about-us' element={<AboutUs />} />
                  <Route exact path='/contact-us' element={<Contact />} />
                  <Route exact path="/all-case-study" element={<AllCasesStudies />} />
                  <Route exact path="/family-law" element={<FamilyLaw />} />
                  <Route exact path="/criminal-defense" element={<CriminalDefence />} />
                  <Route exact path="/business-law" element={<BusinessLaw />} />
                  <Route exact path="/immigration-law" element={<ImmigrationLaw />} />
                  <Route exact path="/property-auditing-law" element={<PropertyAuditing />} />
                  <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route exact path="/terms-conditions" element={<TermsConditions />} />
                  <Route exact path="/accessibility" element={<Accessibility />} />
                </Routes>
              </Router>
              <Footer />
            </div>
          </div>
      }
    </div >
  );
}

export default App;