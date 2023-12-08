import React from 'react'
import { Helmet } from 'react-helmet'

const FamilyLaw = () => {
  return (
    <div className='py-2 bg-white'>
      <Helmet>
        <title>Legal Brothers - Family Laws</title>
        <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
      </Helmet>
      <div className='mt-4 pt-3 pb-1 container' style={{ background: "rgb(0 0 0 / 5%)", height: "100%" }}>
        <center className='fs-1 fw-bolder border-bottom py-3 border-3' style={{ color: "rgb(217, 7, 0)" }}>Family Laws</center>
        <div className='container text-dark py-4' style={{ height: "" }}>
          <div className='fs-5'>
            Our  <b>family law division</b> is equipped to address a wide range of legal matters affecting families. We handle cases related to divorce, child custody, spousal support, property division, and adoption. Our compassionate approach ensures that your family's best interests are our top priority.
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>01. &nbsp;&nbsp; Child Custody </div>
            <div className='px-5 '>
              Ensuring the well-being of your children is paramount in any custody dispute. Our lawyers will work tirelessly to negotiate and litigate custody arrangements that serve your children's best interests.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>02. &nbsp;&nbsp;Spousal Support</div>
            <div className='px-5 '>
              Whether you are seeking or opposing spousal support, our legal team will advocate for a fair and just resolution that aligns with your circumstances.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>03. &nbsp;&nbsp;Adoption</div>
            <div className='px-5 '>
              Adoption is a joyous but legally complex process. Our family law attorneys have the knowledge and experience to help you navigate adoption procedures and provide support through every step of the journey.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>04. &nbsp;&nbsp;Divorce</div>
            <div className='px-5 '>
              Going through a divorce can be emotionally and legally challenging. Our family law attorneys are here to guide you through the process, protecting your rights and helping you make the best decisions for your future.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyLaw