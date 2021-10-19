import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from'../../../Images/banner/background_1_1600x700.jpg'
import img2 from'../../../Images/banner/backgroud2.jpg'
import img3 from'../../../Images/banner/backgroud3.jpg'

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
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Banner;