import React from 'react'
import { Helmet } from 'react-helmet'

const TermsConditions = () => {
    return (
        <div className='py-1 bg-light'>
            <Helmet>
                <title>Legal Brothers - Terms & Conditions</title>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow' />
            </Helmet>
            <div className='mt-4 w-75 p-4 container bg-light' style={{ minWidth: "400px" }}>
                <div className='container bg-white p-4 shadow rounded border'>
                    <div className="fs-1 mb-2">
                        Terms & Conditions
                        <hr />
                    </div>
                    <div className="mb-4">
                        Terms of (Re)Use
                    </div>
                    <div className='mb-4'>
                        Legal Brothers is pleased to offer you most everything on this website free of charge. Please feel welcome to copy or share articles and resources with like-minded individuals and networks.
                    </div>
                    <div className="mb-4">
                        Our sole request is that you please do not use Legal Brothers materials and resources for financial gain. For example, please do not sell our publications (unless by specific permission) or attempt to pass them off as your own intellectual property. If you do reference or quote Legal Brothers work, please indicate the precise source.
                    </div>
                    <hr />
                    <div className="mb-2 fs-5 fw-semibold">
                        What this means in technical copyright terms:
                    </div>
                    <div className="mb-4">
                        Content on this website is licensed under a Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported license. You are free to copy, distribute and transmit the work under the following conditions: the work must be attributed to Legal Brothers; you may not use this work for commercial purposes; you may not alter, transform, or build upon this work. To learn more about Creative Commons licences, visit creativecommons.org.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsConditions