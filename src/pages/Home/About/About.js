import React from 'react';
import './About.css'
import img from'../../../Images/services/b189ee95362655.5e95d603048e1.jpg'
import img2 from'../../../Images/services/p1-img-1.jpg'
import { Link } from 'react-router-dom';
const About = () => {
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
                            <button className="mt-5 btn2">See More</button>
                        </Link>
                  </div>
                  <div className="col-md-6">
                       <img width="100%" src={img2} alt="" />
                  </div>
            </div>
           </div>
        </div>
    );
};

export default About;