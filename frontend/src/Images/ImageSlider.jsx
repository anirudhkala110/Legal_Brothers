import React, { useEffect, useState } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash, Circle, CircleDot } from 'lucide-react';
import sadv from './Sadv.png';
import cdd from './cdd.png';
import exp from './exp.png';
import FL from './security.png';
import CD from './felonies.png';
import BL from './BusForm.png';
import Visa from './visa.png';
import Property from './property.png';
import Logo from './logo.png'; // Import your CSS file for styling
import { Helmet } from 'react-helmet';

const imageUrls = [sadv, cdd, exp, FL, CD, BL, Visa, Property, Logo];
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
                return imageUrls.length - 1
            }
            else {
                clearInterval()
                return index - 1
            }
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            showNextImage();
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="img-container" style={{ width: '100%', height: '100%' }}>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow' />
            </Helmet>
            <center>
                <img
                    src={imageUrls[imageIndex]}
                    alt={`Slider Image ${imageIndex + 1}`}
                    className="img-slider-img  p-1 rounded"
                    style={{ aspectRatio: '1', maxHeight: '300px', width: 'auto' }}
                />
            </center>
            <button className="img-slider-btn" onClick={showPrevImage} style={{ left: 0 }}>
                <ArrowBigLeftDash />
            </button>
            <button className="img-slider-btn" onClick={showNextImage} style={{ right: 0 }}>
                <ArrowBigRightDash />
            </button>
            <center className='my-1'>
                {
                    imageUrls.map((_, index) => (
                        <button key={index} onClick={e => setImageIndex(index)} className='btn p-1'>{index === imageIndex ? <CircleDot className="bg-dark text-light circle rounded-5 shadow" style={{ scale: ".8", transition: ".2s ease-in-out" }} /> : <Circle className="bg-dark text-light rounded-5 shadow circle" style={{ scale: ".5", transition: ".2s ease-in-out" }} />}</button>
                    ))
                }
            </center>
        </div>
    );
};

export default ImageSlider;
