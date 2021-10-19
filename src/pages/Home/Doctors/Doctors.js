import React from 'react';
import'./Doctors.css'
import doctorsbanner from'../../../Images/banner/group-doctors-blank-banner-isolated-over-white-background-201512442.jpg'
import doctor1 from'../../../Images/doctors/team-img-1.jpg'
import doctor2 from'../../../Images/doctors/team-img-2.webp'
import doctor3 from'../../../Images/doctors/team-img-3.jpg'
import doctor4 from'../../../Images/doctors/team-img-4.jpg'
import doctor5 from'../../../Images/doctors/team-img-5.jpg'
import doctor6 from'../../../Images/doctors/team-img-6.jpg'
import doctor7 from'../../../Images/doctors/team-img-7.jpg'
import doctor8 from'../../../Images/doctors/team-img-8.jpg'
import doctor9 from'../../../Images/doctors/team-img-9.webp'
import doctor10 from'../../../Images/doctors/team-img-10.jpg'


const Doctors = () => {
    return (
            <div>
                    <img width="100%" src={doctorsbanner} alt=""
                    />
                    <h1 className="title">Meet our doctors</h1>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <img width="100%" src={doctor1} alt="" />
                            <h2>Andy Grant</h2>
                            <h6>Cardiology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">anthony.greene@qode.com</span>
                        </div>
                        <div className="col-md-8 p-4">
                                <p className="details">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. Non habent claritatem in sitamcon quat duis autem facilisis at vero eros nibh. Euismod tincidunt ut laoreet vel eum iriure sequitur mutatioco nsuetudi um. Lectorum mirum est notare uis autem vel eum iriure dolor in. Hendrerit in vulputate velit esse molestie consequat, vel illum. Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.
                                Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel euiriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at ver eros et accumsan 
                                et.
                                Iusto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait nulla facilisi. lacerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie co nsequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem.
                                </p>
                        </div>

                        <div className="col-md-8 p-4">
                                <p className="details">Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie co nsequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero.wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie co nsequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem.
                                </p>
                        </div>
                        <div className="col-md-4">
                            <img width="100%" src={doctor2} alt="" />
                            <h2>Diana Kelley</h2>
                            <h6>Gynecology</h6>
                            <hr/>
                            <h6> + (123) 1800-567-1228</h6>
                            <hr />
                           <span className="email-color">anthony.greene@qode.com</span>
                        </div>
                    </div>
                </div>
               {/* This Another Container */}
                <h1 className="title mt-4">Meet our professionals </h1>
              
                <div className="container">
                   <div className="row">
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor3} alt="" />
                           <h2>Owen Cox</h2>
                            <h6>Cardiology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">owen.cox@qode.com</span>
                           <hr />
                       </div>
                       <div className="col-md-3 pt-4">
                            <img width="100%" src={doctor4} alt="" />
                            <h2>Sia Morgan</h2>
                            <h6>Cardiology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">sia.morgan@qode.com</span>
                           <hr />
                       </div>
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor5} alt="" />
                           <h2>Paul Wallace</h2>
                            <h6>Neurology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">paul.wallace@qode.com</span>
                           <hr />
                       </div>
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor6} alt="" />
                           <h2>Xavier Hughes</h2>
                            <h6>Cardiology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">john.hughes@qode.com</span>
                           <hr />
                       </div>
                   </div>
                </div>
                  {/* This Another Container */}
                <div className="container mt-3">
                   <div className="row">
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor7} alt="" />
                            <h2>Edward Nash</h2>
                            <h6>Cardiac Surgery</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">edward.nash@qode.com</span>
                       </div>
                       <div className="col-md-3 pt-4">
                            <img width="100%" src={doctor8} alt="" />
                            <h2>Faith Short</h2>
                            <h6>Cardiac Surgery</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">faith.short@qode.com</span>
                       </div>
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor9} alt="" />
                           <h2>Rita Adams</h2>
                            <h6>Cardiology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">rita.adams@qode.com</span>

                       </div>
                       <div className="col-md-3 pt-4">
                           <img width="100%" src={doctor10} alt="" />
                           <h2>Jake Leod</h2>
                            <h6>Neurology</h6>
                            <hr/>
                            <h6>+ (123) 1800-567-1210</h6>
                            <hr />
                           <span className="email-color">jake.leod@qode.com</span>
                       </div>
                   </div>
                </div>
             </div>
    );
};

export default Doctors;