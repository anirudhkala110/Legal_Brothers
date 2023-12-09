import React from 'react'
import logo from '../Images/PNGs/logo.png'
import { Helmet } from 'react-helmet'
const Footer = () => {
    return (
        <div className='bg-black text-white' style={{ minHeight: "15vh" }}>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
            </Helmet>
            <div className='container p-1 footer'>
                <div className='d-flex align-items-start'>
                    <img src={logo} className='rounded' width={100} />
                    <div className='mx-2 px-2'>
                        <div className='fs-3'>Legal Brothers</div>
                        <div className=''>
                            <div className="">_______________</div>
                            <div className="">EST. 2000</div>
                            <br /><i class="bi bi-c-circle"> Legal Brothers<sup>TM</sup></i>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="mb-1">
                        <div className="fw-semibold" style={{ color: "rgb(217, 7, 0)" }}>
                            Address
                        </div>
                        <div className="">
                            Lucknow, U.P.
                        </div>
                    </div>
                    <div className="">
                        <div className="fw-semibold" style={{ color: "rgb(217, 7, 0)" }}>
                            Contact
                        </div>
                        <div className="">
                            +91-8172846811
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className=' fs-5 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>
                        Areas of Practice
                    </div>
                    <div className='footer-element-focus-area' style={{ listStyle: "disc" }}>
                        <div className='me-1'>
                            <div><a href='/family-law' className="text-decoration-none mb-2  text-light" >1. &nbsp;&nbsp;Family-law</a></div>
                            <div><a href='/criminal-defense' className="text-decoration-none mb-2  text-light" >2. &nbsp;&nbsp;Criminal-Defense</a></div>
                            <div><a href='/business-law' className="text-decoration-none mb-2  text-light" >3. &nbsp;&nbsp;Business-Law & Corporatins</a></div>
                        </div>
                        <div className='ms-1'>
                            <div><a href='/immigration-law' className="text-decoration-none mb-2 text-light" >4. &nbsp;&nbsp;Immigration-Law</a></div>
                            <div><a href='/property-auditing-law' className="text-decoration-none mb-2 text-light" >5. &nbsp;&nbsp;Property-Auditing-Law</a></div>
                            <div><a href='/student-laws' className="text-decoration-none mb-2 text-light" >6. &nbsp;&nbsp;Student-Law</a> more...</div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div class="nav-item mb-1 btn text-white py-1" style={{ background: "#D90700" }}>
                        <a class="nav-link" href="/contact-us">Free Legal Consultation</a>
                    </div>
                    <div className="">
                        <a href='/privacy-policy' className="text-decoration-none mb-1 text-light" ><div className="text-decoration-none mb-1">Privacy Policy</div></a>
                        <a href='/terms-conditions' className="text-decoration-none mb-1 text-light" ><div className="text-decoration-none mb-1">Terms & Conditions</div></a>
                        <a href='/accessibility' className="text-decoration-none mb-1 text-light" ><div className="text-decoration-none mb-1">Accessibility</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer