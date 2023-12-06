import React from 'react'
import 'bootstrap/js/dist/offcanvas.js'
import 'bootstrap/js/dist/dropdown.js'
import logo from '../Images/logo.png'
const Navbar = () => {
    return (
        <div className='bg-light'>
                <nav class="navbar bg-black text-light py-0 px-5" style={{maxHeight:""}}>
                {/* <nav class="navbar bg-black text-light py-0 px-5" style={{maxHeight:""}}> */}
                    <a class="navbar-brand " href="/">
                        <img src={logo} width={40} className='me-2 rounded-5 border border-3 border-black' /><span className='fs-3 fw-bold text-light'>Legal Brothers</span>
                    </a>
                    <button class="navbar-toggler text-light width-less-than-1000" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i class="bi bi-list"></i>
                    </button>
                    <div class="width-more-than-1000 text-light" style={{maxHeight:"70px"}}>
                        <li class="nav-item rounded-0 mx-1 btn">
                            <a class="nav-link text-light active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li class="nav-item rounded-0 mx-1 btn">
                            <a class="nav-link text-light" href="/about-us">About</a>
                        </li> */}
                        <li class="nav-item rounded-0 mx-1 btn">
                            <a class="nav-link text-light" href="/all-case-study">Updates</a>
                        </li>
                        <li class="nav-item rounded-0 mx-1 btn dropdown">
                            <a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Focus Area
                            </a>
                            <ul className='dropdown-menu px-2 width-more' style={{ listStyle: "none",maxHeight:"300px" }}>
                                <li> <a href='/family-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Child Custody</a></li>
                                <li> <a href='/family-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Spousal Support</a></li>
                                <li> <a href='/family-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Adoption</a></li>
                                <li> <a href='/family-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Divorce</a></li>
                                <li> <a href='/criminal-defense' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Misdemeanors</a></li>
                                <li> <a href='/criminal-defense' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Felonies</a></li>
                                <li> <a href='/business-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Contract Drafting</a></li>
                                <li> <a href='/business-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Business Information</a></li>
                                <li> <a href='/business-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black " >Intellectual Properties</a></li>
                                <li> <a href='/business-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Employment Law</a></li>
                                <li> <a href='/immigration-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Visa Applications</a></li>
                                <li> <a href='/immigration-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Green Card Processes</a></li>
                                <li> <a href='/immigration-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Deportation</a></li>
                                <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Property Law</a></li>
                                <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Taxation Laws</a></li>
                                <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 ps-1 py-1 d-flex align-items-center justify-content-start text-black" >Constitutional Perspective</a></li>
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
                                    <a class="nav-link" href="/all-case-study">Updates</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Focus Area
                                    </a>
                                    <ul className='dropdown-menu text-dark offcanvas-li' style={{ listStyle: "none" }}>
                                        <li> <a href='/family-law' className="text-decoration-none mb-2 text-black ps-3" >Child Custody</a></li>
                                        <li> <a href='/family-law' className="text-decoration-none mb-2 text-black ps-3" >Spousal Support</a></li>
                                        <li> <a href='/family-law' className="text-decoration-none mb-2 text-black ps-3" >Adoption</a></li>
                                        <li> <a href='/family-law' className="text-decoration-none mb-2 text-black ps-3" >Divorce</a></li>
                                        <li> <a href='/criminal-defense' className="text-decoration-none mb-2 text-black ps-3" >Misdemeanors</a></li>
                                        <li> <a href='/criminal-defense' className="text-decoration-none mb-2 text-black ps-3" >Felonies</a></li>
                                        <li> <a href='/business-law' className="text-decoration-none mb-2 text-black ps-3" >Contract Drafting</a></li>
                                        <li> <a href='/business-law' className="text-decoration-none mb-2 text-black ps-3" >Business Information</a></li>
                                        <li> <a href='/business-law' className="text-decoration-none mb-2 text-black ps-3" >Intellectual Properties</a></li>
                                        <li> <a href='/business-law' className="text-decoration-none mb-2 text-black ps-3" >Employment Law</a></li>
                                        <li> <a href='/immigration-law' className="text-decoration-none mb-2 text-black ps-3" >Visa Applications</a></li>
                                        <li> <a href='/immigration-law' className="text-decoration-none mb-2 text-black ps-3" >Green Card Processes</a></li>
                                        <li> <a href='/immigration-law' className="text-decoration-none mb-2 text-black ps-3" >Deportation</a></li>
                                        <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 text-black ps-3" >Property Laws</a></li>
                                        <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 text-black ps-3" >Taxation Laws</a></li>
                                        <li> <a href='/property-auditing-law' className="text-decoration-none mb-2 text-black ps-3" >Constitutional Perspective</a></li>
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