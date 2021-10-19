import React from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {singInWithGoogle} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services'
    console.log("came from",);

    const handleGoogleLogin = () =>{
        singInWithGoogle()
        .then(result => {
          history.push(redirect_uri)
        })
    }
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="enter your password"/>
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to medical and healthcare center? <Link to="/register">Create Account</Link></p>
                <div>---------or-------</div>
                <button className="btn btn-warning"
                onClick={handleGoogleLogin}
                >Google SingIn</button>
            </div>
        </div>
    );
};

export default Login;