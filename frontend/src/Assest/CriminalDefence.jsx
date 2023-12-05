import React from 'react'

const CriminalDefence = () => {
  return (
    <div className='pt-5 bg-white'>
      <div className='mt-4 pt-3 container' style={{ background: "rgb(0 0 0 / 5%)", height: "100%" }}>
        <center className='fs-1 fw-bolder border-bottom border-secondary mt-5 py-3 border-3' style={{ color: "rgb(217, 7, 0)" }}>Criminal Defense</center>
        <div className='container text-dark py-4' style={{ minHeight: "80vh" }}>
          <div className='fs-5'>
            Facing <b>criminal charges</b> can be a daunting experience, but you don't have to face it alone. Our criminal defense attorneys have a proven track record of successfully defending clients in a wide range of cases, from minor misdemeanors to serious felonies.
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>01. &nbsp;&nbsp;  Misdemeanors </div>
            <div className='px-5 '>
              We handle cases involving misdemeanor offenses such as theft, drug possession, and traffic violations. Our lawyers will work diligently to secure the best possible outcome for your case.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>02. &nbsp;&nbsp;Felonies</div>
            <div className='px-5 '>
              Felony charges are more serious and carry severe consequences. Our experienced attorneys are well-prepared to provide you with a strong legal defense in complex felony cases.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CriminalDefence