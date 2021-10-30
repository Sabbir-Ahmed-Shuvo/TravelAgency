import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import blogimg5 from'../../../Images/doctors/people.png'
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="container mt-5">
           <Services></Services>
           </div>
            <div className="container">
                <div className="row mt-5 pb-4">
                    <div className="col-md-7 col-12 pb-5">
                        <img width="100%" src={blogimg5} alt="" />
                    </div>
                    <div className="col-md-5 col-12 bg-color mt-5">
                         <div className="blog-text">
                            <h6>HAPPY CUSTOMERS</h6>
                            <p className="p-2">Phasellus vel hendrerit erat. Quisque euismod interdum cond stibulum ante ipsum. Primis in faucibus orci luctus et ultricecubilia curae nlam placerat leo mauris, lacinia pulvinar unc tinciduntfaucib
                            </p>
                         </div>
                         <div>
                             <Link to="/manage-order">
                             <button className="mt-5 btn2">See More About</button>
                             </Link>
                         </div>
                         
                    </div>
                </div>
                 
                <h1 className="mt-4">Caucasus Vacation Packages</h1>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                       <div className="col-md-4">
                         <p>$ <span className="text-font">32</span></p>
                       </div>
                       <div className="col-md-8 blog-text">
                       <p className="text">Basic pakeg</p>
                       <h3>Services included</h3>
                       <hr />
                       <p className="text">Machu Picchu, Peru</p>
                       <p className="text">The Grand Canyon, Arizona</p>
                       <p className="text"> Rome, Italy</p>
                       <p className="text">Maui, Hawaii</p>
                       <p className="text">Masai Mara, Kenya</p>
                       </div>
                       </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                       <div className="col-md-4">
                         <p>$ <span className="text-font">64</span></p>
                       </div>
                       <div className="col-md-8 blog-text">
                       <p className="text">Advanced package</p>
                       <h3>Services included</h3>
                       <hr />
                       <p className="text">Montreal, Canada</p>
                       <p className="text">New Zealand</p>
                       <p className="text">Istanbul, Turkey</p>
                       <p className="text">Angkor Wat, Cambodia</p>
                       <p className="text">London, England</p>
                       </div>
                       </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                       <div className="row">
                       <div className="col-md-4">
                         <p>$ <span className="text-font">80</span></p>
                       </div>
                       <div className="col-md-8 blog-text">
                       <p className="text">Premium package</p>
                       <h3>Services included</h3>
                       <hr />
                       <p className="text">Manhattan, New York</p>
                       <p className="text">Paris, France</p>
                       <p className="text">San Francisco, California</p>
                       <p className="text">Hong Kong</p>
                       <p className="text">Marrakesh, Morocco</p>
                       </div>
                       </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Home;