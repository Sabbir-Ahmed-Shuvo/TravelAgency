import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form onsubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="enter your password"/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Re-enter password"/>
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;