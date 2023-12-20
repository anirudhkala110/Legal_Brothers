import React, { useEffect, useState } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash, Circle, CircleDot } from 'lucide-react';
import highcourt1cp from './Gallery/highcourt1cp.jpeg';
import highcourt2 from './Gallery/highcourt2.jpeg';
import highcourt3 from './Gallery/highcourt3.jpeg';
import highcourt5 from './Gallery/highcourt5.jpeg';
import highcourt6 from './Gallery/highcourt6.jpeg';
import highcourt7 from './Gallery/highcourt7.jpeg';

import { Helmet } from 'react-helmet';

const imageUrls = [highcourt1cp, highcourt3, highcourt5, highcourt6, highcourt7];
// const imageUrls = [highcourt2, highcourt3];
const ImageSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) {
                clearInterval()
                return 0
            }
            return index + 1

        });
    };

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) {
                clearInterval()
                i = imageUrls.length - 1
                return imageUrls.length - 1
            }
            else {
                clearInterval()
                i = index - 1
                return index - 1
            }
        });
    };
    var i = 0
    useEffect(() => {
        const intervalId = setInterval(() => {
            showNextImage();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="img-container" style={{ width: '100%', height: '100%' }}>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow' />
            </Helmet>
            <div className='' style={{ overflowY: "auto" }}>
                <center className='shadow w-100 bg-white p-2'>
                    <img
                        src={imageUrls[imageIndex]}
                        alt={`Slider Image ${imageIndex + 1}`}
                        className={`img-slider-img hide_show  p-1 rounded`}
                    />
                </center>
                <button className="img-slider-btn" onClick={showPrevImage} style={{ left: 0 }}>
                    <ArrowBigLeftDash />
                </button>
                <button className="img-slider-btn" onClick={showNextImage} style={{ right: 0 }}>
                    <ArrowBigRightDash />
                </button>
            </div>
            <center className='circlesdiv'>
                {
                    imageUrls.map((_, index) => (
                        <button key={index} onClick={e => setImageIndex(index)} className='btn p-1 img-slider-dot-btn'>{index === imageIndex ? <CircleDot className="bg-dark text-light circle rounded-5 shadow" style={{ scale: ".8", transition: ".2s ease-in-out" }} /> : <Circle className="bg-dark text-light rounded-5 shadow circle" style={{ scale: ".5", transition: ".2s ease-in-out" }} />}</button>
                    ))
                }
            </center>
        </div>
    );
};

export default ImageSlider;
