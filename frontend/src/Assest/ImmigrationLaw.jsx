import React from 'react'
import { Helmet } from 'react-helmet'

const ImmigrationLaw = () => {
  return (
    <div className='py-2 bg-light immi-law' style={{ minHeight: "50vh" }}>
      <Helmet>
        <title>Legal Brothers - Immigration Law</title>
        <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
        <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
      </Helmet>
      <div className='mt-4 pt-3 container' style={{ background: "rgb(0 0 0 / 5%)", height: "100%" }}>
        <center className='fs-1 fw-bolder border-bottom py-3 mt-5 border-3 border-secondary' style={{ color: "rgb(217, 7, 0)" }}>Immigration Law</center>
        <div className='container text-dark py-4' style={{ minHeight: "80vh" }}>
          <div className='fs-5'>
            <strong>Immigration </strong>matters can be fraught with complexity and uncertainty. Our immigration lawyers are here to help individuals and families seeking to navigate the U.S. immigration system.
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>01. &nbsp;&nbsp; Visa Applications </div>
            <div className='px-5 '>
              We assist with a wide range of visa applications, including work visas, family-based visas, and investor visas.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>02. &nbsp;&nbsp;Green Card Processes</div>
            <div className='px-5 '>
              Our legal team can guide you through the green card application process, helping you achieve permanent residency in the United States.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>03. &nbsp;&nbsp;Deportation Defense</div>
            <div className='px-5 '>
              If you or a loved one is facing deportation, our attorneys can provide a strong defense to protect your right to remain in the country.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImmigrationLaw