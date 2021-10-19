import React from 'react';
import { Link } from 'react-router-dom';
import'./service.css'
const Service = ({service}) => {
    const {id,name,img,description} = service;
    return (
        <div className="card-bg">
            <img className="w-100" src={img} alt="" />
            <h4 className="mt-3">{name}</h4>
            <p className="mt-3">{description}</p>
            <div>
               <Link to={`/details/${id}`}>
               <button className="btn btn-warning">Show Details</button>
               </Link>
            </div>
        </div>
    );
};

export default Service;