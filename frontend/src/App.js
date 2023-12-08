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
import { Helmet } from "react-helmet"
import StudentLaws from './Assest/StudentLaws';
import AccidentalLaw from './Assest/AccidentalLaws';

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
    <div className='bg-black' style={{ minWidth: "350px" }}>
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
              <button className='btn border-0 text-white w-100' onClick={e => handleButtonClick(8172846811)} style={{ background: "#D90700" }}>
                <span class="bi bi-telephone-fill fw-bold" >&nbsp;&nbsp;Call Now</span>
              </button>
            </div>
          </div>
        </div> :
          <div>
            <button className='btn slider text-white' onClick={e => handleButtonClick(8172846811)} style={{ background: "#D90700" }}>
              <div><b><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;<strong>CALL NOW</strong></b> <br className='br-in-slider' /><span className='Number'>+91-8172846811</span></div>
            </button>
            <div className="App min-vh-100">
              <Navbar />
              <Router>
                <Helmet>
                  <title>Legal Brothers</title>
                  <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                  <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
                </Helmet>
                <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route exact path='/contact-us' element={<Contact />} />
                  <Route exact path="/all-case-study" element={<AllCasesStudies />} />
                  <Route exact path="/family-law" element={<FamilyLaw />} />
                  <Route exact path="/criminal-defense" element={<CriminalDefence />} />
                  <Route exact path="/business-law" element={<BusinessLaw />} />
                  <Route exact path="/immigration-law" element={<ImmigrationLaw />} />
                  <Route exact path="/property-auditing-law" element={<PropertyAuditing />} />
                  <Route exact path="/student-laws" element={<StudentLaws />} />
                  <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route exact path="/terms-conditions" element={<TermsConditions />} />
                  <Route exact path="/accessibility" element={<Accessibility />} />
                  <Route exact path="/accidental-laws" element={<AccidentalLaw />} />
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
