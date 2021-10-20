import React from 'react';
import { Form , Button} from 'react-bootstrap';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import'./Login.css'


const Login = () => {
    const {singInWithGoogle,} =useAuth();
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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
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