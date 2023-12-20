import React from 'react'
import 'bootstrap/js/dist/offcanvas.js'
import 'bootstrap/js/dist/dropdown.js'
import logo from '../Images/PNGs/logo.png'
import { Helmet } from 'react-helmet'
const Navbar = () => {
    return (
        <div className='bg-light'>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
            </Helmet>
            <nav class="navbar bg-black text-light py-0 px-5" style={{ maxHeight: "" }}>
                {/* <nav class="navbar bg-black text-light py-0 px-5" style={{maxHeight:""}}> */}
                <a class="navbar-brand " href="/">
                    <img src={logo} width={40} className='me-2 rounded-5 border border-3 border-black' /><span className='fs-3 fw-bold text-light'>Legal Brothers</span>
                </a>
                <button class="navbar-toggler text-light width-less-than-1000" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="bi bi-list"></i>
                </button>
                <div class="width-more-than-1000 text-light" style={{ maxHeight: "70px" }}>
                    <li class="nav-item rounded-0 mx-1 btn">
                        <a class="nav-link text-light active" aria-current="page" href="/">Home</a>
                    </li>
                    {/* <li class="nav-item rounded-0 mx-1 btn">
                            <a class="nav-link text-light" href="/about-us">About</a>
                        </li> */}
                    <li class="nav-item rounded-0 mx-1 btn">
                        <a class="nav-link text-light" href="/Gallery">Image Gallery</a>
                    </li>
                    <li class="nav-item rounded-0 mx-1 btn">
                        <a class="nav-link text-light" href="/all-case-study">Updates</a>
                    </li>
                    <li class="nav-item rounded-0 mx-1 btn dropdown">
                        <a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Focus Area
                        </a>
                        <ul className='dropdown-menu width-more' style={{ listStyle: "none", maxHeight: "250px", width: "200px" }}>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Child Custody</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Spousal Support</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Adoption</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Divorce</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Misdemeanors</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Felonies</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Contract Drafting</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Business Information</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Intellectual Properties</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Employment Law</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Visa Applications</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Green Card Processes</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Deportation</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Property Law</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Taxation Laws</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Constitutional Perspective</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/student-laws' className="text-decoration-none" >Student Section</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/accidental-laws' className="text-decoration-none" >Injury Insight</a></li>
                        </ul>
                    </li>
                    {/* <li class="nav-item rounded-0 mx-3 btn text-light dropdown">
                            <a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    <li class="nav-item ms-1 me-4 btn my-4 btn text-white py-2" style={{ background: "#D90700" }}>
                        <a class="nav-link" href="/contact-us">Free Legal Consultation</a>
                    </li>
                </div>
                <div class="offcanvas offcanvas-start bg-white text-white" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ background: "#cde4fc", color: "white !important" }}>
                    <div class="offcanvas-header text-white">
                        <a class="navbar-brand" href="/">
                            <img src={logo} width={40} className='me-2 rounded-5 fw-bolder border border-3 border-black text-white fs-1' />Legal Brothers
                        </a>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr className='text-black' />
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li class="nav-item">
                                    <a class="nav-link" href="/about-us">About</a>
                                </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="/Gallery">Image Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/all-case-study">Updates</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Focus Area
                                </a>
                                <ul className='dropdown-menu width-more' style={{ listStyle: "none", maxHeight: "250px", width: "200px" }}>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Child Custody</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Spousal Support</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Adoption</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Divorce</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Misdemeanors</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Felonies</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Contract Drafting</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Business Information</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Intellectual Properties</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Employment Law</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Visa Applications</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Green Card Processes</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Deportation</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Property Law</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Taxation Laws</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Constitutional Perspective</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/student-laws' className="text-decoration-none" >Student Section</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/accidental-laws' className="text-decoration-none" >Injury Insight</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                        </ul>
                        <li class="nav-item text-black py-2">
                            <a class="nav-link" href="/contact-us">Book a Free Session</a>
                        </li>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar