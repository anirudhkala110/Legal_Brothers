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
                        <button key={index} onClick={e => setImageIndex(index)} className='btn p-1'>{index === imageIndex ? <CircleDot  className="bg-dark text-light circle rounded-5 shadow" style={{ scale: ".8", transition: ".2s ease-in-out" }} /> : <Circle  className="bg-dark text-light rounded-5 shadow circle" style={{ scale: ".5", transition: ".2s ease-in-out" }} />}</button>
                    ))
                }
            </center>
        </div>
    );
};

export default ImageSlider;
