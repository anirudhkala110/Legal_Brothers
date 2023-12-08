import React from 'react'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
    return (
        <div className='py-1 bg-light pb-2'>
            <Helmet>
                <title>Legal Brothers - Privacy Policy</title>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow' />
            </Helmet>
            <div className='container w-75 mt-4 p-4' style={{ minWidth: "350px" }}>
                <div className='container bg-white shadow rounded p-5 border'>
                    <div className="fs-2 my-3" >Privacy Policy</div>
                    <hr />
                    <div className="my-3" >Legal Brothers respects your privacy.</div>
                    <div className="my-3" >
                        <div className="mb-4" >We do not collect personally identifiable information from individuals through this website unless it is provided voluntarily and knowingly like on our e-newsletter subscription or donation forms. Any and all personal information you voluntarily provide is protected under the provisions of Canada’s federal privacy legislation.</div>
                        <div className="mb-4" >We do collect non-personal and aggregate information from our site visitors. We automatically log information about visits to this website in the normal course of establishing and maintaining web connections. Our servers record statistical information such as visitors’ IP addresses, time and duration of visit, and web pages visited.</div>
                        <div className="mb-4" >Like most websites, ours uses “cookies” to obtain non-personal information from site visitors (small data files that your web browser places on your computer when you visit a website). Most browsers accept cookies automatically, but can be configured not to accept them or to indicate when a cookie is being sent. That is up to you to set up.</div>
                        <div className="mb-4" >Legal Brothers does not extract personal information in this process, nor do we provide this information to third parties. Cookies allow us to speed up the navigation process and to make the website experience more efficient; they also help us measure the traffic on our website.</div>
                        <div className="mb-4" >Legal Brothers has taken steps to keep all information received from our online visitors as secure as possible against unauthorized access and use.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy