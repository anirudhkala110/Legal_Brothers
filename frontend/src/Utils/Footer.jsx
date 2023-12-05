import React from 'react'
import logo from '../Images/logo.png'
const Footer = () => {
    return (
        <div className='bg-black text-white' style={{ minHeight: "15vh" }}>
            <div className='container p-1 footer'>
                <div className='d-flex align-items-start'>
                    <img src={logo} className='rounded' width={100} />
                    <div className='mx-2 px-2'>
                        <div className='fs-3'>Legal Brothers</div>
                        <div className=''>
                            <div className="">_______________</div>
                            <div className="">EST. 2000</div>
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
                            +91-8568489567
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className=' fs-5 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>
                        Areas of Practice
                    </div>
                    <div className='footer-element-focus-area' style={{ listStyle: "disc" }}>
                        <div>
                            <div> <a href='/family-law' className="text-decoration-none mb-2  text-light" >1. &nbsp;&nbsp;Family-law</a></div>
                            <div> <a href='/criminal-defense' className="text-decoration-none mb-2  text-light" >2. &nbsp;&nbsp;Criminal-Defense</a></div>
                            <div> <a href='/business-law' className="text-decoration-none mb-2  text-light" >3. &nbsp;&nbsp;Business-Law & Corporatins</a></div>
                        </div>
                        <div>
                            <div> <a href='/immigration-law' className="text-decoration-none mb-2 text-light" >4. &nbsp;&nbsp;Immigration-Law</a></div>
                            <div> <a href='/property-auditing-law' className="text-decoration-none mb-2 text-light" >5. &nbsp;&nbsp;Property-Auditing-Law</a></div>
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