import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)


const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h3>Login</h3>
            
            <div>
                <button onClick={handleGoogleSignIn}>Google sign in</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' name="" id="" />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;