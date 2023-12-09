import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sadv from "../Images/Gallery/main2.jpg"
import cdd from "../Images/PNGs/cdd.png"
import exp from "../Images/PNGs/exp.png"
import FL from "../Images/PNGs/security.png"
import CD from "../Images/PNGs/felonies.png"
import BL from "../Images/PNGs/BusForm.png"
import Visa from "../Images/PNGs/visa.png"
import Property from "../Images/PNGs/property.png"
import Logo from '../Images/PNGs/logo.png'
import Rt from '../Images/PNGs/right.png'
import accident from '../Images/PNGs/accident.png'
import ImageSlider from '../Images/ImageSlider'
import { Helmet } from 'react-helmet'


const imageUrls = [
    { sadv, cdd, exp, FL, CD, BL, Visa, Property, Logo }
]

const Landing = () => {
    const [ava, setAva] = useState(false)
    return (
        <div className='pt-' style={{ minHeight: "100vh", background: "white" }}>
            <Helmet>
                <title>Legal Brothers</title>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
            </Helmet>
            {ava ? <center className='w-50 bg-light shadow py-4 px-3' style={{ height: "400px" }}>
                <h2>This Page is under construction</h2>
                Please Click <Link to="/about-us" className='text-decoration-none fw-bold'>About Us</Link> to see the demo of the site
                <div className='d-flex justify-content-center p-5 align-items-center'>
                    <i class="bi bi-arrow-clockwise  rotate" style={{ fontSize: "150px" }}></i>
                    <i class="rotate" style={{ fontSize: "250px" }}>*</i>
                </div>
            </center> :
                <div className=''>
                    <div className='text-light my-2 px-4 py-5 landing-one-base' style={{ minWidth: "350px" }}>
                        <div className='container px-5' style={{ backdropFilter: "blur(0px)", maxHeight: "" }}>
                            <div className='mb-4 fs-4 fw-bold' style={{ color: "#D90700" }}>
                                Experience. Compassion. Integrity.
                            </div>
                            <div className='my-4' style={{ maxWidth: "450px" }}>
                                Skilled in Appeals and Litigation including Employment Law, Personal Injury, Professional Negligence & Insurance Cases
                            </div>
                            <div className='my-4' style={{ maxWidth: "450px" }}>
                                Established with a passion for justice and a commitment to our clients, Legal Brothers is a respected name in the legal industry. Our law firm is known for its unwavering dedication to client success and its extensive experience in various practice areas.
                            </div>
                            <li class="nav-item my-4 btn text-white py-2" style={{ background: "#D90700" }}>
                                <a class="nav-link" href="/contact-us">Free Legal Consultation</a>
                            </li>
                        </div>
                        <hr />
                        <div className='container location-contact px-5'>
                            <div className='mb-3 fs-4'>
                                <img src={Logo} width={30} className='me-2 rounded-5' />Legal Brothers<br />
                                <span className='fs-6 fw-semibold'>
                                    <span class="bi bi-geo-alt-fill fs-6 fw-semibold" style={{ color: "#D90700" }}>&nbsp;&nbsp;Location</span>
                                    <br />
                                    Lucknow, U.P.
                                </span>
                            </div>
                            <div className='mb-3'>
                                <span class="bi bi-telephone-fill fs-5 fw-bold" style={{ color: "#D90700" }}>&nbsp;&nbsp;Free Legal Consultation</span>
                                <br />
                                <span className='fs-4 fw-bold'>
                                    +90-8172846811
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white my-2 py-3' style={{ minHeight: "50vh" }} >
                        <div className='container px-5'>
                            <div className='row shadow mb-2 py-3 px-2'>
                                <div className=' col-sm-12 col-md-12 col-lg-6 col-xl-6 '>
                                    <div className='my-4'>
                                        <div className='fs-2'>Hello, <br />Welcome to Legal Brothers</div>
                                        <hr />
                                        <div className=''>Legal Brothers have been practicing law in Lucknow, U.P. for over 35 years and I handle all kinds of litigation matters, including appeals, employment and labour disputes, personal injury and insurance cases, long-term disability claims, professional negligence cases, shareholder and partnership disputes, and some criminal cases.</div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                                    <img className='shadow rounded-3 card' src={sadv} style={{ backdropFilter: "drop-shadow(2px 4px 6px black)", width: "100%" }} />
                                </div>
                            </div>
                            <div className='row my-5'>
                                <div className='col-sm-12 col-lg-3 shadow mb-2 py-3 px-2'>
                                    <span className='d-flex mb-3 align-items-center justify-content-start'>
                                        <img src={exp} width={40} className='me-3' />
                                        <div className='fs-3 fw-bold'>Experience</div>
                                    </span>
                                    <div className='px-2'>
                                        With years of experience in the legal field, our attorneys possess a deep understanding of the law's intricacies, allowing us to provide you with the best possible legal support.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-3 mb-2 shadow py-3 px-2'>
                                    <span className='d-flex mb-3 align-items-center justify-content-start'>
                                        <img src={cdd} width={40} className='me-3' />
                                        <div className='fs-3 fw-bold'>Strong Advocate</div>
                                    </span>
                                    <div className='px-2'>
                                        Whether in the courtroom or at the negotiation table, our lawyers are strong advocates for your rights. We are committed to achieving the best possible outcomes for our clients.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: "0 auto", position: "relative", maxHeight: "450px",maxWidth:"1920px" }} className='ImageSlider py-2 bg-white'>
                        <ImageSlider />
                    </div>
                    <div className='my-5 d-flex justify-content-center p-1' style={{ background: "black", minHeight: "20vh" }}>
                        <div className='container  text-white px-5 book-highlight border-white row'>
                            <div className=' fs-3 fw-bold btn-outline-primary border-0 btn col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                                Book a Free Consultation
                            </div>
                            <div className='text-white col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                                We are available for a no-cost consultation to better understand your legal needs, and to provide guidance on the best next steps.
                            </div>
                            <div className='col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                                <li class="nav-item my-4 btn text-white py-2 w-100" style={{ background: "#D90700" }}>
                                    <a class="nav-link" href="/contact-us">Free Legal Consultation</a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 py-3'>
                        <div className='container'>
                            <center className='fs-1 my-5 border-bottom border-3 fw-bold'>Practice Areas​</center>
                            <div className='row my-4 px-1'>
                                <Link to='/family-law' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={FL} width={40} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Family Law</center>
                                        <hr />
                                        <div className='p-2'>Our family law division is here to assist you in navigating the intricacies of family legal matters. From divorce and child custody disputes to spousal support and adoption, our family law attorneys have the expertise to ensure that your rights and the well-being of your family are protected.</div>
                                    </div>
                                </Link>
                                <Link to='/criminal-defense' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={CD} width={40} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Criminal Defense</center>
                                        <hr />
                                        <div className='p-2'>In the face of criminal charges, our criminal defense lawyers will be your strongest advocates. We are committed to safeguarding your rights and providing a vigorous defense, no matter the nature or severity of the charges against you.</div>
                                    </div>
                                </Link>
                                <Link to='/business-law' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={BL} width={40} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-bottom-0 border-0 border-primary w-100'>Corporate Laws</center>
                                        <hr />
                                        <div className='p-2'> For businesses of all sizes, our business law attorneys offer a comprehensive range of legal solutions. We provide expert counsel in areas such as contract drafting, business formation, intellectual property, and employment law matters.</div>
                                    </div>
                                </Link>
                                <Link to='/immigration-law' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={Visa} width={60} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Immigration Law</center>
                                        <hr />
                                        <div className='p-2'>Navigating immigration issues can be complex and challenging. Our immigration lawyers are here to help individuals and families with visa applications, green card processes, deportation defense, and other immigration-related concerns.</div>
                                    </div>
                                </Link>
                                <Link to='/property-auditing-law' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={Property} width={60} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Property Auditing</center>
                                        <hr />
                                        <div className='p-2'>In India, the legal framework for properties auditing primarily falls under the purview of property laws, taxation laws, and corporate laws.</div>
                                    </div>
                                </Link>
                                <Link to='/student-laws' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={Rt} width={60} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Student Laws</center>
                                        <hr />
                                        <div className='p-2'> In <b>India, </b> An advocate, specializing in education law in India, can handle various legal matters related to students, educational institutions, and the education system.</div>
                                    </div>
                                </Link>
                                <Link to='/accidental-laws' className=' col-sm-12 g-2 rounded text-decoration-none text-black p-1 col-md-6 col-xl-3 mb-3 '>
                                    <div className='bg-white p-1 shadow rounded card-subjects' style={{ height: "100%" }}>
                                        <img src={accident} width={60} />
                                        <center className='fs-4 my-2 fw-bold rounded-0 sub-main-topic border-0 border-primary w-100'>Injury Insight</center>
                                        <hr />
                                        <div className='p-2'> In <b>India, </b>In many cases, accidents involve personal injury, and personal injury law comes into play. If someone is injured due to the negligence of another party (such as a car accident), the injured party may have the right to seek compensation for medical expenses, lost wages, pain, and suffering. Personal injury lawyers often handle such cases.</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 py-3 landing-base-two'>
                        <div className='container px-5' style={{ maxWidth: "600px" }}>
                            <div>
                                <div className='fs-4 fw-bold' style={{ color: "#D90700" }}>Professional And Experienced Lucknow, U.P. Lawyer</div>
                                <div className='fs-3 fw-bold'>Why Choose Legal Brothers</div>
                                <div className=''>
                                    <div className='my-3'>
                                        <label className='fs-4 fw-light'>01. &nbsp;&nbsp;&nbsp;Experience</label>
                                        <div className='ps-2 fw-lighter ms-5'>Years of experience in the legal field</div>
                                    </div>
                                    <div className='my-3'>
                                        <label className='fs-4 fw-light'>02. &nbsp;&nbsp;&nbsp;Personalized Service</label>
                                        <div className='ps-2 fw-lighter ms-5'>I believe strongly in providing personal service and in giving my personal attention to my clients’ cases.</div>
                                    </div>
                                    <div className='my-3'>
                                        <label className='fs-4 fw-light'>03. &nbsp;&nbsp;&nbsp;Integrity</label>
                                        <div className='ps-2 fw-lighter ms-5'>I believe that the privilege of practicing law carries with it an obligation to serve the profession and community.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Landing