import React from 'react';
import {  useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import'./Login.css'


const Login = () => {
    const {singInWithGoogle} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
   

    const handleGoogleLogin = () =>{
        singInWithGoogle()
        .then(result => {
          history.push(redirect_uri)
        })
    }
    
    return (
        <div  className="container">
            <div className="from-width mx-auto mt-5">
                <h2>Login</h2>
                <button className="btn btn-warning"
                onClick={handleGoogleLogin}
                >Google SingIn</button>
            </div>
        </div>
    );
};

export default Login;