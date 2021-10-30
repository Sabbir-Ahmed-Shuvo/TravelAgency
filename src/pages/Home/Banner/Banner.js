import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from'../../../Images/banner/slide01.jpg'
import img2 from'../../../Images/banner/slide02.jpg'


const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Banner;