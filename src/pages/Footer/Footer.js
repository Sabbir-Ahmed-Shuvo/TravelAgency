import React from 'react';
import'./Footer.css'
import logo from'../../Images/icon/logo-footer-img-1-300x78.png'
import image1 from'../../Images/icon/logo1.png'
import image2 from'../../Images/icon/logo2.png'
import image3 from'../../Images/icon/logo3.png'
import image4 from'../../Images/icon/logo4.png'
const Footer = () => {
    return (
        <div className="mt-5 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-12">
                        <div className="pt-3">
                                <img width="75%" src={logo} alt="" />
                                <p className="text mt-3">If you need expert medical advice, you are welcome to contact us at ProMedica any time. Our lines are open 24/7.</p>
                                <h2 className="text-white">+ 08002466 7921</h2>
                                <p className="text mt-3">Email us: <span className="email-color">taravelAgency@qode.com</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12">
                        <div className="pt-3 blog-text">
                                <h2 className="text-white">Useful Thinks</h2>
                                <p className="text2 mt-4">Clinical Chemistry Test</p>
                                <p className="text2">Body Fluid Examination</p>
                                <p className="text2">Endoscopic Sleeve</p>
                                <p className="text2">Health Screening Package</p>
                                <p className="text2">Stereotactic Biopsy</p>
                                <p className="text2">Hook Wire Localisation</p>
                                <p className="text mt-3">Email us: <span className="email-color">taravelAgency@qode.com</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12">
                    <h2 className="text-white mt-3">Latest Blog Posts</h2>
                        <div className="pt-4">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={image1} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                    <p className="text-white">Amazing Travel</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                    <p className="text-white">4 Ways Discover</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                    <p className="text-white">Book Your Trip</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                    <p className="text-white">Nice Support</p>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12">
                        <div className="pt-3 blog-text">
                                <h2 className="text-white">Working hours</h2>
                                <p className="text2 mt-4">Mon – Fri: 9 a.m. – 5 p.m.</p>
                                <p className="text2">Sat – Sun: Closed</p>
                                <p className="text2">650 Birmingham St,</p>
                                <p className="text2">London 3000, UK</p>
                                <p className="text mt-3">Email us: <span className="email-color">taravelAgency@qode.com</span></p>
                        </div>
                    </div>
                    <p className="pt-4 text-white">© 2021 Qode Interactive, All Rights Reserved</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;