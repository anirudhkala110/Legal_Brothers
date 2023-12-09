import React from 'react'
import main1 from './Gallery/main1.jpg'
import main2 from './Gallery/main2.jpg'
import main3 from './Gallery/main3.jpg'
import main4 from './Gallery/main4.jpg'
import main5 from './Gallery/main5.jpg'
import img1 from './Gallery/img1.jpg'
import img3 from './Gallery/img3.jpg'
import img4 from './Gallery/img4.jpg'
import img5 from './Gallery/img5.jpg'
import img6 from './Gallery/img6.jpg'
import img7 from './Gallery/img7.jpg'
import img8 from './Gallery/img8.jpg'
import img9 from './Gallery/img9.jpg'

const image = [main1, main2, main3, main4, main5, img1, img3, img4, img5, img6, img7, img8, img9]

const ImageGallery = () => {
    return (
        <div className='min-vh-100 bg-light'>
            <div className='container p-2'>
                <center className='fs-1 fw-bolder border-bottom border-secondary mt-5 py-3 border-3' style={{ color: "rgb(217, 7, 0)" }}>Image Gallery</center>
                <div className='row'>
                    {
                        image.map((data, i) => (
                            <div key={i} className='col-sm-12 gx-3 gy-3  img-thumbnail col-md-6 col-lg-4 border col-xl-4 col-xxl-3 d-flex justify-content-center' style={{ background: "rgba(0, 0, 0, 0.2)", color: "white", boxShadow: "0px 5px 5px 2px #00000096" }}>
                                <div>
                                    <img src={data} className='pt-2 rounded-4' style={{ maxWidth: "320px", maxHeight: "200px" }} />
                                    {/* <hr /> */}
                                    <center className='fw-bold text-dark'>{i + 1}</center>
                                    <br />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageGallery