import React from 'react';
import { Link } from 'react-router-dom';
import notFound from'../../Images/404page/404-page.jpg'
const NotFound = () => {
    return (
        <div className="mt-5">
            <img src={notFound} alt="" />
            <br /><br />
            <Link to="/">
            <button className="btn btn-warning">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;