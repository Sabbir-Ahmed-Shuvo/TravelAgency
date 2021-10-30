import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './ManageOrder.css'

import img from'../../../Images/services/b189ee95362655.5e95d603048e1.jpg'
import img2 from'../../../Images/services/p1-img-1.jpg'
import slideImg1 from'../../../Images/banner/landing-img-16.jpg'
import slideImg2 from'../../../Images/banner/landing-img-17.webp'
import slideImg3 from'../../../Images/banner/landing-img-18.jpg'
import slideImg4 from'../../../Images/banner/landing-img-19.jpg'
import slideImg5 from'../../../Images/banner/landing-img-20.jpg'
const ManageOrder = () => {
    return (
        <div>
            <div>
                <img width="100%" src={img} alt="" />
            </div>
           <div className="container">
                <div className="row  mt-5">
                        <div className="col-md-6 blog-text  pb-5">
                            <h1>The services we provide</h1>
                            <p className="about-text">
                                Nullam erat lectus, ullamcorper sed finibus ut. Vulputate porttitor     diam, iaculis neque sed enim amet efficitur lorem ipsum lectus sit amet
                                Phasellus vel hendrerit erat. Quisque euismod interdum cond estibulum </p>  
                            <p className="about-text"> 
                            ante ipsm primis in faucibus orci luctus et ultrice cubilia curae; Nullam placerat leo mauris, lacinia pulvinar, runc iduntfaucibus orci sodales augue et pellen.Sed dui metus, ornare vel rhoncus sed endreri adipiscing elit. In posuere interdum nunc eget, roin ac erateu erest.
                            </p>
                            <Link to="/doctors">
                                <button className="mt-5 btn2">Go Doctors page</button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                                <img width="100%" src={img2} alt="" />
                        </div>
                </div>
           </div>
           <div className="container mt-5 p-4">
              <div className="row card-bg pt-5">
                   <div className="col-md-6">
                   <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideImg1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideImg2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideImg3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideImg4}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideImg5}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </div>
                   <div className="col-md-5  blog-text  pb-2 ms-2 mt-3">
                        <h3>-Practical Inner Pages Details</h3>
                            <p className="about-text">
                                Nullam erat lectus, ullamcorper sed finibus ut. Vulputate porttitor     diam, iaculis neque sed enim amet efficitur lorem ipsum lectus sit amet
                                Phasellus vel hendrerit erat. Quisque euismod interdum cond estibulum </p>  
                            <p className="about-text"> 
                            ante ipsm primis in faucibus orci luctus et ultrice cubilia curae; Nullam placerat leo mauris, lacinia pulvinar, runc iduntfaucibus orci sodales augue et pellen.Sed dui metus, ornare vel rhoncus sed endreri adipiscing elit. In posuere interdum nunc eget, roin ac erateu erest.
                            </p>
                            <p className="about-text"> 
                            mauris, lacinia pulvinar, runc iduntfaucibus orci sodales augue et pellen.Sed dui metus, ornare vel rhoncus sed endreri adipiscing elit. In posuere interdum nunc eget.
                            </p>
                   </div>
              </div>
           </div>
        </div>
    );
};

export default ManageOrder;