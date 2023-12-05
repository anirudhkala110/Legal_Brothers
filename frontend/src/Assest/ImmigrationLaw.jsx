import React from 'react'

const ImmigrationLaw = () => {
  return (
    <div className='pt-5 bg-light immi-law' style={{ minHeight: "50vh" }}>
      <div className='mt-4 pt-3 container' style={{ background: "rgb(0 0 0 / 5%)",height:"100%" }}>
        <center className='fs-1 fw-bolder border-bottom py-3 mt-5 border-3 border-secondary' style={{ color: "rgb(217, 7, 0)" }}>Immigration Law</center>
        <div className='container text-dark py-4' style={{minHeight:"80vh"}}>
          <div className='fs-5'>
            <strong>Immigration </strong>matters can be fraught with complexity and uncertainty. Our immigration lawyers are here to help individuals and families seeking to navigate the U.S. immigration system.
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{color:"rgb(217, 7, 0)"}}>01. &nbsp;&nbsp; Visa Applications </div>
            <div className='px-5 '>
              We assist with a wide range of visa applications, including work visas, family-based visas, and investor visas.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{color:"rgb(217, 7, 0)"}}>02. &nbsp;&nbsp;Green Card Processes</div>
            <div className='px-5 '>
              Our legal team can guide you through the green card application process, helping you achieve permanent residency in the United States.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{color:"rgb(217, 7, 0)"}}>03. &nbsp;&nbsp;Deportation Defense</div>
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